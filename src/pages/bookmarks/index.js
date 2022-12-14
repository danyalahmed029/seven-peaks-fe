import { articles } from '../../data/bookmarks';
import ArticleCard from '../../components/article-card';

const BookmarkPage = () => {
    return (
        <div className="home-container bookmark-container">
            <div className="heading-wrapper">
                <h2>All bookmark</h2>

            </div>

            <div className="article-row">
                {articles?.map((article, index) => {
                    return (
                        <div
                            className="article-column"
                            key={index}>
                            <ArticleCard
                                id={article.id}
                                title={article.webTitle}
                                imageUrl={article.fields?.thumbnail}
                                borderClass="pink" />
                        </div>
                    )
                })}

            </div>
        </div>
    )
};

export default BookmarkPage;