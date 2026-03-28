import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-wrap">
          <div className="brand-icon">T</div>
          <div>
            <div className="brand">TaskFlow Pro</div>
            <div className="brand-sub">Secure role-based workspace</div>
          </div>
        </Link>

        <div className="nav-links">
          {!user ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              {user.role === "admin" && (
                <Link to="/admin" className="nav-link">Admin</Link>
              )}
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;