import { useSelector } from "react-redux";

const LandingPage = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1>Welcome to Our App</h1>

            {/* Display different messages based on authentication status */}
            {user ? (user.role === "admin" ? <p>Welcome Admin</p> : <p>Welcome User</p>) 
                  : <p>Please log in to access the platform.</p>}
        </div>
    );
};

export default LandingPage;
