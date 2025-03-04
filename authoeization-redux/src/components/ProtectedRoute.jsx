import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
    const user = useSelector((state) => state.auth.user);
    const location = useLocation();

    // If not logged in, redirect to login and store previous location
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If logged in but wrong role, redirect to home
    if (user.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
