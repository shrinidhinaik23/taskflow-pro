const User = require("../models/User");
const Task = require("../models/Task");
const logger = require("../config/logger");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAnyTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    logger.info(`Admin ${req.user.email} deleted task: ${task.title}`);

    res.status(200).json({
      success: true,
      message: "Task deleted by admin successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllTasks,
  deleteAnyTask,
};