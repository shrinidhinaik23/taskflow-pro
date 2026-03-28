import { useEffect, useState } from "react";
import api from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { user } = useAuth();

  const fetchTasks = async (customPage = page) => {
    try {
      setFetching(true);
      const res = await api.get(
        `/tasks?status=${statusFilter}&search=${search}&sort=${sort}&page=${customPage}&limit=5`
      );
      setTasks(res.data.tasks);
      setPages(res.data.pages || 1);
      setPage(res.data.page || 1);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to fetch tasks");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchTasks(1);
  }, []);

  const handleCreateTask = async (taskData) => {
    try {
      setLoading(true);
      await api.post("/tasks", taskData);
      setMessage("Task created successfully");
      setEditingTask(null);
      fetchTasks(1);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      setLoading(true);
      await api.put(`/tasks/${editingTask._id}`, taskData);
      setMessage("Task updated successfully");
      setEditingTask(null);
      fetchTasks(page);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    try {
      await api.delete(`/tasks/${id}`);
      setMessage("Task deleted successfully");
      if (editingTask && editingTask._id === id) setEditingTask(null);
      fetchTasks(page);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to delete task");
    }
  };

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((t) => t.status === "pending").length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;

  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user?.name}</h1>
          <p>
            Manage your work with a secure, role-based task platform built for
            clarity, speed, and control.
          </p>
        </div>

        <div className="header-chip">
          <div className="header-chip-label">Role</div>
          <div className="header-chip-value">{user?.role}</div>
        </div>
      </div>

      {message && <div className="message">{message}</div>}
      {fetching && <div className="message">Loading tasks...</div>}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Tasks</div>
          <div className="stat-value">{totalTasks}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending</div>
          <div className="stat-value">{pendingTasks}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-value">{completedTasks}</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "22px" }}>
        <div className="section-title">Search & Filter</div>

        <div className="filter-grid">
          <input
            placeholder="Search by task title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="priority">Priority</option>
          </select>

          <button className="btn btn-primary" onClick={() => fetchTasks(1)}>
            Apply
          </button>
        </div>
      </div>

      <div className="grid grid-2">
        <TaskForm
          onCreate={editingTask ? handleUpdateTask : handleCreateTask}
          loading={loading}
          editingTask={editingTask}
        />

        <div>
          <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={setEditingTask} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "18px",
            }}
          >
            <button
              className="btn btn-ghost"
              disabled={page <= 1}
              onClick={() => fetchTasks(page - 1)}
            >
              Previous
            </button>

            <div style={{ alignSelf: "center", color: "#64748b", fontWeight: 600 }}>
              Page {page} of {pages}
            </div>

            <button
              className="btn btn-ghost"
              disabled={page >= pages}
              onClick={() => fetchTasks(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;