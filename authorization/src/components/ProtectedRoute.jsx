import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        // Redirect to login and preserve the intended route
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.role !== role) {
        return <Navigate to="/notfound" replace />;
    }

    return children;
};

export default ProtectedRoute;


// when user is not login and user try to access next page using url endpoint then it will redirect to login page
// when user is login but try to access rndpoint that is not created by developer then it will redirect to notfound page