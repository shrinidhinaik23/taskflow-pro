const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>Your Tasks</h3>
      <p className="card-subtitle">
        Review, update, and manage your active work items.
      </p>

      {tasks.length === 0 ? (
        <p className="empty-state">
          No tasks yet. Create your first task to start building momentum.
        </p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <div className="task-top">
              <div>
                <h4>{task.title}</h4>
                <p>{task.description || "No description provided."}</p>
              </div>
            </div>

            <div className="badges">
              <span className="badge badge-status">{task.status}</span>
              <span className="badge badge-priority">{task.priority}</span>
            </div>

            <div className="task-meta">
              Created: {task.createdAt ? new Date(task.createdAt).toLocaleString() : "N/A"}
              {task.dueDate ? ` • Due: ${new Date(task.dueDate).toLocaleDateString()}` : ""}
            </div>

            <div className="actions-row">
              <button className="btn btn-secondary" onClick={() => onEdit(task)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(task._id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;