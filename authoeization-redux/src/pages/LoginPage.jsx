import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../redux/authSlice";

const LoginPage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath, { replace: true });
    }
  }, [user, navigate, location]);

  const handleLogin = (role) => {
    dispatch(login(role));
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
