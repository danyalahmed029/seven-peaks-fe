import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { ReactComponent as BookmarkIcon } from '../../assets/svg/bookmark-icon.svg';
import { fetchArticle } from '../../api';
import parse from 'html-react-parser';
import dayjs from "dayjs";
import { setArticleBookmark, findArticle, removeArticle } from '../../data/bookmarks';
import Loader from '../../components/loader';
import SnackBar from '../../components/snack-bar';


const ArticlePage = () => {
    const [article, setArticle] = useState({})
    const [searchParams] = useSearchParams();
    const [articleId] = useState(searchParams.get("id"));
    const [bookmarkCheck, setBookmarkCheck] = useState(findArticle(articleId) ? true : false);
    const [loading, setLoading] = useState(true);
    const [snackBar, setSnackBar] = useState({
        show: false,
        text: "",
        className: ""
    });

    useEffect(() => {
        setLoading(true);
        fetchArticle(articleId).then(data => {
            setArticle(data);
            setLoading(false);
        }).catch(error => {
            console.log('error:', error)
            setLoading(false);

        })
    }, [articleId]);


    const onRemoveArticle = () => {
        removeArticle(articleId);
        setBookmarkCheck(false);
        setSnackBar({
            show: true,
            text: "removed from bookmarks",
            className: "red"
        });
        removeSnackBar();
    }

    const onAddArticle = () => {
        setArticleBookmark(article);
        setBookmarkCheck(true);
        setSnackBar({
            show: true,
            text: "saved to bookmarks",
            className: "green"
        });
        removeSnackBar();

    }

    const removeSnackBar = () => {
        setTimeout(() => {
            setSnackBar({
                show: false,
                text: "",
                className: ""
            })
        }, 2000)


    }

    return (
        <div className="article-container">
            <Loader loading={loading} />
            {bookmarkCheck ?
                <button onClick={onRemoveArticle} className="btn-bookmarks">
                    <BookmarkIcon />
                    Remove Bookmark
                </button>
                :
                <button onClick={onAddArticle} className="btn-bookmarks">
                    <BookmarkIcon />
                    Add Bookmark
                </button>
            }

            <p className='article-date'>{(dayjs(article.webPublicationDate).format("ddd DD MMM YYYY hh:mm"))}</p>
            <div className="heading-row">
                <div className="heading-column">
                    <h1>
                        {article.webTitle}
                    </h1>
                    <h4>
                        {article?.fields?.headline}
                    </h4>
                    <hr className='article-border-line' />
                </div>
            </div>

            <div className="article-content-row">
                <div className="article-content-column-left">
                    {article?.fields && parse(article?.fields?.body)}
                </div>
                <div className="article-content-column-right">
                    <img className='article-image' src={article?.fields?.thumbnail} alt="Article" />

                </div>
            </div>


            <SnackBar show={snackBar.show} text={snackBar.text} className={snackBar.className} />
        </div>
    )
};

export default ArticlePage;