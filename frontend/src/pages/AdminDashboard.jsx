import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const usersRes = await api.get("/admin/users");
      const tasksRes = await api.get("/admin/tasks");
      setUsers(usersRes.data.users);
      setTasks(tasksRes.data.tasks);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to fetch admin data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteTask = async (id) => {
    const confirmed = window.confirm("Delete this task from admin console?");
    if (!confirmed) return;

    try {
      await api.delete(`/admin/tasks/${id}`);
      setMessage("Task deleted successfully");
      fetchData();
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to delete task");
    }
  };

  const totalUsers = users.length;
  const totalTasks = tasks.length;
  const totalAdmins = users.filter((u) => u.role === "admin").length;

  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h1>Admin Console</h1>
          <p>
            Signed in as {user?.name}. Review platform activity, manage users,
            and control task records across the workspace.
          </p>
        </div>

        <div className="header-chip">
          <div className="header-chip-label">Access Level</div>
          <div className="header-chip-value">Admin</div>
        </div>
      </div>

      {message && <div className="message">{message}</div>}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">{totalUsers}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Tasks</div>
          <div className="stat-value">{totalTasks}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Admins</div>
          <div className="stat-value">{totalAdmins}</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>All Users</h3>
          <p className="card-subtitle">
            Overview of registered accounts and permission levels.
          </p>

          {users.length === 0 ? (
            <p className="empty-state">No users found.</p>
          ) : (
            users.map((item) => (
              <div className="user-row" key={item._id}>
                <p><strong>{item.name}</strong></p>
                <p>{item.email}</p>
                <p>Role: {item.role}</p>
              </div>
            ))
          )}
        </div>

        <div className="card">
          <h3>All Tasks</h3>
          <p className="card-subtitle">
            Centralized view of all task activity across users.
          </p>

          {tasks.length === 0 ? (
            <p className="empty-state">No tasks found.</p>
          ) : (
            tasks.map((task) => (
              <div className="task-card" key={task._id}>
                <h4>{task.title}</h4>
                <p>{task.description || "No description provided."}</p>

                <div className="badges">
                  <span className="badge badge-status">{task.status}</span>
                  <span className="badge badge-priority">{task.priority}</span>
                </div>

                <div className="task-meta">
                  Created by: {task.createdBy?.name || "Unknown"}
                  {task.createdAt
                    ? ` • ${new Date(task.createdAt).toLocaleString()}`
                    : ""}
                </div>

                <div className="actions-row">
                  <button className="btn btn-danger" onClick={() => handleDeleteTask(task._id)}>
                    Delete Task
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;