import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
    const { user } = useAuth();


    return (
        <div>
            <h1>Welcome to Our App</h1>

            {/* If user is not logged in, show message */}
            {user ? (user.role === "admin" ? <p>Welcome Admin</p> : <p>Welcome User</p>) : <p>Please log in to access the platform.</p>}

        </div>
    );
};

export default LandingPage;
