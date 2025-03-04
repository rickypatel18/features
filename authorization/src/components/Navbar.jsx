import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

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
                    <button onClick={logout} style={{ marginTop: "10px" }}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
