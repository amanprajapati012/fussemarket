const TeamMember = require("../models/TeamMember");

const getTeamMembers = async (req, res) => {
  const filter = req.query.all === "true" ? {} : { isActive: true };
  const members = await TeamMember.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, count: members.length, members });
};

const createTeamMember = async (req, res) => {
  const member = await TeamMember.create(req.body);
  res.status(201).json({ success: true, member });
};

const updateTeamMember = async (req, res) => {
  const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!member) return res.status(404).json({ success: false, message: "Team member not found" });
  res.json({ success: true, member });
};

const deleteTeamMember = async (req, res) => {
  const member = await TeamMember.findByIdAndDelete(req.params.id);
  if (!member) return res.status(404).json({ success: false, message: "Team member not found" });
  res.json({ success: true, message: "Team member deleted" });
};

module.exports = { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };
