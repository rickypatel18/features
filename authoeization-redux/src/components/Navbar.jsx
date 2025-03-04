import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <nav>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/">Home</Link>
                {user && (
                    <>
                        {user.role === "admin" && <Link to="/admin">Admin</Link>}
                        {user.role === "user" && (
                            <>
                                <Link to="/user">User</Link>
                                <Link to="/profile">Profile</Link>
                                <Link to="/settings">Settings</Link>
                                <Link to="/dashboard">Dashboard</Link>
                            </>
                        )}
                    </>
                )}
            </div>
            <div>
                {user ? (
                    <button onClick={() => dispatch(logout())} style={{ marginTop: "10px" }}>
                        Logout
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
