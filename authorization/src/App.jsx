import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

// Custom Route to Handle Not Found Logic
const NotFoundHandler = () => {
  const { user } = useAuth();
  return user ? <NotFoundPage /> : <Navigate to="/login" replace />;
  // replace==false => Pressing the back button will not take the user back to the unauthorized page.
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminPage /></ProtectedRoute>} />
          <Route path="/user" element={<ProtectedRoute role="user"><UserPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute role="user"><ProfilePage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute role="user"><SettingsPage /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute role="user"><DashboardPage /></ProtectedRoute>} />

          {/* Only Show NotFoundPage If Logged In, Otherwise Redirect to Login */}
          <Route path="*" element={<NotFoundHandler />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
