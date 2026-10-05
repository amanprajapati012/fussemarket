const ContactMessage = require("../models/ContactMessage");

const submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email and message are required" });
  }
  const contact = await ContactMessage.create(req.body);
  res.status(201).json({ success: true, message: "Message sent successfully", contact });
};

const getMessages = async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json({ success: true, count: messages.length, messages });
};

const updateMessageStatus = async (req, res) => {
  const message = await ContactMessage.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!message) return res.status(404).json({ success: false, message: "Message not found" });
  res.json({ success: true, message });
};

const deleteMessage = async (req, res) => {
  const message = await ContactMessage.findByIdAndDelete(req.params.id);
  if (!message) return res.status(404).json({ success: false, message: "Message not found" });
  res.json({ success: true, message: "Message deleted" });
};

module.exports = { submitContact, getMessages, updateMessageStatus, deleteMessage };
