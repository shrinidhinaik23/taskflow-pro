import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      setMessage("Registration successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="page-center">
      <div className="auth-card">
        <div className="auth-badge">Fast Setup • Secure Access</div>
        <h2>Create account</h2>
        <p className="subtitle">
          Build, manage, and track your work inside a polished role-based platform.
        </p>

        {message && <div className="message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

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
            Create Account
          </button>
        </form>

        <p className="footer-note">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#2563eb", fontWeight: 700 }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;