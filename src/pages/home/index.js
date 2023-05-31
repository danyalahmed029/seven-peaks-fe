import { useEffect, useState } from 'react';
import ArticleCard from '../../components/article-card';
import { fetchArticles } from '../../api';
import TopStories from '../../components/top-stories';
import { groupedELements } from '../../utils';
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

import Loader from '../../components/loader';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const HomePage = () => {
    const [topStories, setTopStories] = useState([]);
    const [articles, setArticles] = useState([]);
    const [orderBy, setOrderBy] = useState('newest')
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();


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
                <h2>News</h2>
                <p>Read the news online.</p>
            </div>



            <div className="article-search-container">

                <div className="search-row">
                    <div className="search-column">
                        <div className="search-body">

                        <label>Search article</label>
                        <input placeholder='Search news' className='date-picker'/>
                        </div>
                    </div>
                    <div className="search-column">
                        <div className="search-body">
                            <label>Filter by Date</label>
                            <DatePicker
                            className='date-picker'
                            placeholderText='Select by date'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </div>
                    <div className="search-column">
                        <div className="search-body">

                            <label>Filter by Category</label>
                            <Select
                                isMulti
                                options={options}
                                placeholder="Select by category"
                            />
                        </div>
                    </div>

                    <div className="search-column">
                        <div className="search-body">

                            <label>Filter by Source</label>
                            <Select
                                isMulti
                                options={options}
                                placeholder="Select by source"
                            />
                        </div>
                    </div>



                </div>
                <p className='total-news'>Total 200 news found</p>
            </div>

            <div className="articles-container">
                {
                    Object.keys(articles).map((key, index) => {
                        return (
                            <>
                                {/* <div key={index} className='sub-heading'>
                                    <h3>{key}</h3>
                                </div> */}
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
                                                        description={article.fields?.trailText}
                                                        date={article.webPublicationDate}
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