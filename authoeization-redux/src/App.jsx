import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route path="/admin" element={<ProtectedRoute role="admin"><AdminPage /></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute role="user"><UserPage /> </ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute role="user"><ProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute role="user"><SettingsPage /> </ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute role="user"><DashboardPage /></ProtectedRoute>} />

            {/* Show NotFoundPage ONLY if logged in */}
            <Route path="*" element={<ProtectedRoute role="user"><NotFoundPage /></ProtectedRoute>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}
