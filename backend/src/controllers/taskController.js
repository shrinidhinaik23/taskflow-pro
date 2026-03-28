const Task = require("../models/Task");
const logger = require("../config/logger");

const createTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      createdBy: req.user._id,
    });

    logger.info(`Task created by ${req.user.email}: ${task.title}`);

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

const getMyTasks = async (req, res, next) => {
  try {
    const { status, search, sort, page = 1, limit = 5 } = req.query;

    const query = { createdBy: req.user._id };

    if (status && status !== "all") {
      query.status = status;
    }

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    let sortOption = { createdAt: -1 };

    if (sort === "oldest") sortOption = { createdAt: 1 };
    if (sort === "priority") sortOption = { priority: -1 };

    const tasks = await Task.find(query)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Task.countDocuments(query);

    res.status(200).json({
      success: true,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      total,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    logger.info(`Task updated by ${req.user.email}: ${updatedTask.title}`);

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    logger.info(`Task deleted by ${req.user.email}: ${task.title}`);

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
};