import { useEffect, useState } from 'react';
import ArticleCard from '../../components/article-card';
import { fetchArticles } from '../../api';
import TopStories from '../../components/top-stories';
import { groupedELements } from '../../utils';
import { Link } from "react-router-dom";

import { ReactComponent as BookmarkIcon } from '../../assets/svg/bookmark-icon.svg';
import Loader from '../../components/loader';


const HomePage = () => {
    const [topStories, setTopStories] = useState([]);
    const [articles, setArticles] = useState([]);
    const [orderBy, setOrderBy] = useState('newest')
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const storyQuery = `page-size=8&setion=news&show-fields=thumbnail,trailText&order-by=${orderBy}`;
        const query = `page-size=15&setion=sport|culture|lifeandstyle&show-fields=thumbnail,trailText&order-by=${orderBy}`;
        setLoading(true);

        Promise.all([fetchArticles(storyQuery), fetchArticles(query)])
            .then(function (results) {
                const topStories = results[0];
                const categories = results[1];
                setTopStories(topStories);
                setArticles(groupedELements(categories));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [orderBy]);

    return (
        <div className="home-container">
            <Loader loading={loading} />
            <div className="heading-wrapper">
                <h2>Top Stories</h2>
                <div className="sidebar-actions">
                    <Link to="/bookmarks" className="btn-bookmarks">
                        <BookmarkIcon />
                        View Bookmark
                    </Link>
                    <select name="filters" onChange={(e) => setOrderBy(e.target.value)} className='filters'>
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                    </select>
                </div>
            </div>

            <div className="top-stories-container">
                <TopStories topStories={topStories} />
            </div>

            <div className="articles-container">
                {
                    Object.keys(articles).map((key, index) => {
                        return (
                            <>
                                <div key={index} className='sub-heading'>
                                    <h3>{key}</h3>
                                </div>
                                <div className="article-row">
                                    {
                                        articles[key] &&
                                        articles[key].map(article => {
                                            return (
                                                <div className="article-column">
                                                    <ArticleCard
                                                        key={article.id}
                                                        id={article.id}
                                                        title={article.webTitle}
                                                        imageUrl={article.fields?.thumbnail}
                                                        borderClass="pink" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        );
                    })
                }
            </div>

        </div>
    )
};

export default HomePage;