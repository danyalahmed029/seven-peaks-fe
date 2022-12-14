import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { fetchArticles } from '../../api';

import { ReactComponent as BookmarkIcon } from '../../assets/svg/bookmark-icon.svg';
import ArticleCard from '../../components/article-card';
import Loader from "../../components/loader";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [query, setQuery] = useState(searchParams.get("q"));
    const [articles, setArticles] = useState([]);
    const [filter, setFilters] = useState("newest");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setQuery(searchParams.get("q"));
        getSearchArticles(searchParams.get("q"), filter);
    }, [location, searchParams]);

    const getSearchArticles = (q, order) => {
        const searchQuery = `q=${q}&page-size=50&order-by=${order}&show-fields=thumbnail`;
        setLoading(true);
        fetchArticles(searchQuery)
            .then(data => {
                setLoading(false)
                setArticles(data);
            }).catch(error => {
                console.log(error);
                setLoading(false)
            })
    }

    const onFilterChange = (e) => {
        setFilters(e.target.value);
        getSearchArticles(query, e.target.value);
    }

    return (
        <div className="home-container search-container">
            <Loader loading={loading} />
            <div className="heading-wrapper">
                <h2>Search results</h2>
                <div className="sidebar-actions">
                    <Link to="/bookmarks" className="btn-bookmarks">
                        <BookmarkIcon />
                        View Bookmark
                    </Link>
                    <select
                        name="filters"
                        value={filter}
                        onChange={onFilterChange}
                        className='filters'
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                        <option value="relevance">Most popular</option>
                    </select>
                </div>
            </div>

            <div className="article-row">
                {/* <div className="article-column"> */}
                {articles?.map((article, index) => {
                    return (
                        <div
                            className="article-column"
                            key={index}
                        >
                            <ArticleCard
                                id={article.id}
                                title={article.webTitle}
                                imageUrl={article.fields?.thumbnail}
                                borderClass="pink" />
                        </div>
                    )
                })
                }
                {/* <div className="article-card">
                        <img className='article-image' src={ArticleImage4} alt="Article 4" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Irish government contacts UAE over crime boss role in Fury-Joshua bout
                                </h2>

                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage5} alt="Article 5" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Harold Varner matches Justin Rose and strikes blow for equality on return
                                </h2>

                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage6} alt="Article 6" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    By forcing Nascar's Confederate flag ban, Bubba Wallace is saving a sport from itself
                                </h2>

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="article-row">
                <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage4} alt="Article 4" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Irish government contacts UAE over crime boss role in Fury-Joshua bout
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage5} alt="Article 5" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Harold Varner matches Justin Rose and strikes blow for equality on return
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage6} alt="Article 6" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    By forcing Nascar's Confederate flag ban, Bubba Wallace is saving a sport from itself
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="article-row">
                <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage4} alt="Article 4" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Irish government contacts UAE over crime boss role in Fury-Joshua bout
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-column">
                    <div className="article-card">
                        <img className='article-image' src={ArticleImage5} alt="Article 5" />
                        <div className="article-detail-wrapper">
                            <div className="article-title">
                                <h2>
                                    Harold Varner matches Justin Rose and strikes blow for equality on return
                                </h2>

                            </div>
                        </div>
                    </div>

                </div>

            </div> */}
        </div>
    )
};

export default SearchPage;