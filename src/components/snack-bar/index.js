import { ReactComponent as BookmarkIcon } from '../../assets/svg/bookmark-icon.svg';

const SnackBar = ({ show, text, className }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={`snack-bar ${className ? className : ""}`}>
            <BookmarkIcon />
            <span>{text}</span>
        </div>
    )
}

export default SnackBar;