import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
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
    id
}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                navigate(`/article?id=${id}`)
            }}
            className={`article-card ${cardClass ? cardClass : ''} border-bottom-${borderClass ? borderClass : "pink"}`}
        >
            {imageUrl ?
                <img className='article-image' src={imageUrl} alt={altText || "..."} /> :
                <div className="article-placeholder">
                    <LogoWhite />
                </div>

            }
            <div className={`article-detail-wrapper ${wrapperClass ? wrapperClass : ''}`}>
                <div className="article-title">
                    <h2>
                        {title}
                    </h2>
                    {description && <p>{parse(description)}</p>}
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
    id: PropTypes.string.isRequired
}