const express = require("express");
const {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", getClients);
router.post("/", protect, createClient);
router.put("/:id", protect, updateClient);
router.delete("/:id", protect, deleteClient);

module.exports = router;
