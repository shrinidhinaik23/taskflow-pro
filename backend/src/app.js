const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "TaskFlow Pro API is running" });
});

app.get("/api-docs", (req, res) => {
  res.json({
    project: "TaskFlow Pro API",
    version: "v1",
    endpoints: {
      auth: [
        "POST /api/v1/auth/register",
        "POST /api/v1/auth/login",
        "GET /api/v1/auth/me"
      ],
      tasks: [
        "GET /api/v1/tasks",
        "GET /api/v1/tasks/:id",
        "POST /api/v1/tasks",
        "PUT /api/v1/tasks/:id",
        "DELETE /api/v1/tasks/:id"
      ],
      admin: [
        "GET /api/v1/admin/users",
        "GET /api/v1/admin/tasks",
        "DELETE /api/v1/admin/tasks/:id"
      ]
    }
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorMiddleware);

module.exports = app;