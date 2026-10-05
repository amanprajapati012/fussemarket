const express = require("express");
const {
  submitContact,
  getMessages,
  updateMessageStatus,
  deleteMessage,
} = require("../controllers/contactController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/", submitContact);
router.get("/", protect, getMessages);
router.put("/:id", protect, updateMessageStatus);
router.delete("/:id", protect, deleteMessage);

module.exports = router;
