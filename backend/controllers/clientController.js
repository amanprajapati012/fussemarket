const Client = require("../models/Client");

const getClients = async (req, res) => {
  const filter = req.query.all === "true" ? {} : { isActive: true };
  const clients = await Client.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, count: clients.length, clients });
};

const createClient = async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json({ success: true, client });
};

const updateClient = async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!client) return res.status(404).json({ success: false, message: "Client not found" });
  res.json({ success: true, client });
};

const deleteClient = async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) return res.status(404).json({ success: false, message: "Client not found" });
  res.json({ success: true, message: "Client deleted" });
};

module.exports = { getClients, createClient, updateClient, deleteClient };
