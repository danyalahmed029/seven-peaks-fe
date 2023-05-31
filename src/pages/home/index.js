import { useEffect, useState } from 'react';
import ArticleCard from '../../components/article-card';
import { fetchArticles } from '../../api';
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
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();


    useEffect(() => {
        const query = `page-size=15&setion=sport|culture|lifeandstyle&show-fields=thumbnail,trailText&order-by=newest`;
        setLoading(true);
        
        fetchArticles(query).then(function (results) {
                const categories = results;
                setArticles(groupedELements(categories));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

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
                            
                                <div className="article-row" key={index}>
                                    {
                                        articles[key] &&
                                        articles[key].map((article, articleIndex) => {
                                            return (
                                                <div className="article-column" key={articleIndex}>
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
                        );
                    })
                }
            </div>

        </div>
    )
};

export default HomePage;