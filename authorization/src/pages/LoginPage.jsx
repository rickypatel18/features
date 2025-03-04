import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath, { replace: true });
      // redirectpath will save the endpoint that user enter before login and after login it will remember that endpoint => redirect will be done App.js file
      // replace => to not go login page after login
    }
  }, [user, navigate, location]);

  const handleLogin = (role) => {
    login(role);
    const redirectPath = location.state?.from?.pathname || "/";
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("user")}>Login as User</button>
    </div>
  );
};

export default LoginPage;
