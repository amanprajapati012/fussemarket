const Service = require("../models/Service");

const getServices = async (req, res) => {
  const filter = req.query.all === "true" ? {} : { isActive: true };
  const services = await Service.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, count: services.length, services });
};

const getServiceBySlug = async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug });
  if (!service) return res.status(404).json({ success: false, message: "Service not found" });
  res.json({ success: true, service });
};

const createService = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json({ success: true, service });
};

const updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!service) return res.status(404).json({ success: false, message: "Service not found" });
  res.json({ success: true, service });
};

const deleteService = async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ success: false, message: "Service not found" });
  res.json({ success: true, message: "Service deleted" });
};

module.exports = { getServices, getServiceBySlug, createService, updateService, deleteService };
