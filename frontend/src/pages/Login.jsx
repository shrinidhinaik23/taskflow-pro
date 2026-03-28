import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.user, res.data.token);
      navigate(res.data.user.role === "admin" ? "/admin" : "/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-center">
      <div className="auth-card">
        <div className="auth-badge">Premium Workspace Access</div>
        <h2>Welcome back</h2>
        <p className="subtitle">
          Sign in to access your tasks, protected dashboard, and admin features.
        </p>

        {message && <div className="message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Sign In
          </button>
        </form>

        <p className="footer-note">
          New here?{" "}
          <Link to="/register" style={{ color: "#2563eb", fontWeight: 700 }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;