const Testimonial = require("../models/Testimonial");

const getTestimonials = async (req, res) => {
  const filter = req.query.all === "true" ? {} : { isActive: true };
  const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
  res.json({ success: true, count: testimonials.length, testimonials });
};

const createTestimonial = async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json({ success: true, testimonial });
};

const updateTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!testimonial) return res.status(404).json({ success: false, message: "Testimonial not found" });
  res.json({ success: true, testimonial });
};

const deleteTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
  if (!testimonial) return res.status(404).json({ success: false, message: "Testimonial not found" });
  res.json({ success: true, message: "Testimonial deleted" });
};

module.exports = { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
