import PropTypes from 'prop-types';
import { ReactComponent as LogoWhite } from '../../assets/svg/logo-white.svg';
import parse from 'html-react-parser';

const ArticleCard = ({
    title,
    imageUrl,
    altText,
    borderClass,
    cardClass,
    wrapperClass,
    description,
    id,
    date,
}) => {

    return (
        <div
            className={`article-card ${cardClass ? cardClass : ''}`}
        >
            {imageUrl ?
                <img className='article-image' src={imageUrl} alt={altText || "..."} /> :
                <div className="article-placeholder">
                    <LogoWhite />
                </div>

            }
            <div className={`article-detail-wrapper ${wrapperClass ? wrapperClass : ''}`}>
               
                <div className="article-title">
                <div className='article-category'>The Gaurdian | The Gaurdian</div>
                    <h2>
                        {title}
                    </h2>
                    {description && <p>{parse(description)}</p>}
                </div>
                <div className='article-author'>
                    <p>Martin Ferrur</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
    borderClass: PropTypes.string,
    cardClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    date:PropTypes.string,
}