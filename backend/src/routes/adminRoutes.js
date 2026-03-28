const express = require("express");
const {
  getAllUsers,
  getAllTasks,
  deleteAnyTask,
} = require("../controllers/adminController");
const { protect } = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

router.use(protect, authorizeRoles("admin"));

router.get("/users", getAllUsers);
router.get("/tasks", getAllTasks);
router.delete("/tasks/:id", deleteAnyTask);

module.exports = router;