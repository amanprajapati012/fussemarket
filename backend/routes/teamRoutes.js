const express = require("express");
const {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", getTeamMembers);
router.post("/", protect, createTeamMember);
router.put("/:id", protect, updateTeamMember);
router.delete("/:id", protect, deleteTeamMember);

module.exports = router;
