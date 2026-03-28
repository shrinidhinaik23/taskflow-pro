import { useEffect, useState } from "react";

const TaskForm = ({ onCreate, loading, editingTask }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "pending",
        priority: editingTask.priority || "medium",
        dueDate: editingTask.dueDate
          ? new Date(editingTask.dueDate).toISOString().split("T")[0]
          : "",
      });
    } else {
      setForm({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        dueDate: "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <div className="card">
      <h3>{editingTask ? "Edit Task" : "Create New Task"}</h3>
      <p className="card-subtitle">
        Add clear work items with status, priority, and deadlines.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="title"
            placeholder="Task title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            placeholder="Write a short description"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-group">
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Saving..." : editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;