import ArticleCard from '../article-card';
import { colors } from '../../utils';
const TopStories = ({ topStories }) => {
  return (
    <>
      <div className='article-grid'>
        {topStories &&
          topStories.slice(0, 5).map((news, index) => {
            return (
              <ArticleCard
                id={news.id}
                key={news.id}
                title={news.webTitle}
                borderClass={colors[index]}
                cardClass={`card-${index + 1}`}
                imageUrl={news?.fields?.thumbnail}
                description={index === 0 ? news?.fields?.trailText : ''}
                wrapperClass={index > 0 ? 'medium-wrapper' : ''}
              />
            );
          })}
      </div>
      <div className='article-row'>
        {topStories &&
          topStories.slice(5).map((news, index) => {
            return (
              <div key={index} className='article-column'>
                <ArticleCard
                  id={news.id}
                  title={news.webTitle}
                  borderClass={colors[index]}
                  imageUrl={news?.fields?.thumbnail}
                  description={news?.fields?.trailText}
                  wrapperClass="medium-wrapper lines-2"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TopStories;
