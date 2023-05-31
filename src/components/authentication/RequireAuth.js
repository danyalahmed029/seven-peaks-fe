import {
    useLocation,
    Navigate
} from "react-router-dom";

const RequireAuth = ({ children }) => {
    const auth =localStorage.getItem("user");
    console.log("auth",auth);
    let location = useLocation();
    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;