require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Admin = require("./models/Admin");
const Service = require("./models/Service");
const TeamMember = require("./models/TeamMember");
const Testimonial = require("./models/Testimonial");
const Client = require("./models/Client");

const services = [
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    category: "Software & Product Development",
    shortDescription: "Tailored software built around your exact business workflow.",
    icon: "Code2",
    order: 1,
    features: ["Custom Portals", "Business Websites", "Feature Enhancements", "Maintenance"],
  },
  {
    title: "Mobile Application Development",
    slug: "mobile-application-development",
    category: "Software & Product Development",
    shortDescription: "Native and cross-platform apps that scale with your users.",
    icon: "Smartphone",
    order: 2,
    features: ["iOS & Android", "React Native", "App Store Launch", "Post-launch Support"],
  },
  {
    title: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    category: "IT Infrastructure & Cloud",
    shortDescription: "Secure, scalable cloud environments engineered for growth.",
    icon: "Cloud",
    order: 3,
    features: ["AWS / Azure / GCP", "Migration", "DevOps Automation", "24/7 Monitoring"],
  },
  {
    title: "Digital Marketing & Growth",
    slug: "digital-marketing-growth",
    category: "Marketing",
    shortDescription: "Data-driven marketing strategies that convert traffic into revenue.",
    icon: "TrendingUp",
    order: 4,
    features: ["SEO", "Performance Ads", "Content Strategy", "Analytics"],
  },
  {
    title: "Quality Assurance & Testing",
    slug: "quality-assurance-testing",
    category: "Testing & QA",
    shortDescription: "Rigorous manual and automated testing before every release.",
    icon: "ShieldCheck",
    order: 5,
    features: ["Manual Testing", "Automation", "Continuous Testing", "Security Audits"],
  },
  {
    title: "Managed IT Support",
    slug: "managed-it-support",
    category: "Strategy & Support",
    shortDescription: "Round-the-clock support keeping your systems always online.",
    icon: "Headset",
    order: 6,
    features: ["Application Support", "Infra Support", "Customer Support", "SLAs"],
  },
];

const team = [
  { name: "Aditya Sharma", designation: "Founder & CEO", order: 1 },
  { name: "Priya Verma", designation: "Chief Operating Officer", order: 2 },
  { name: "Rohan Mehta", designation: "Head of Engineering", order: 3 },
  { name: "Neha Kapoor", designation: "Chief Financial Officer", order: 4 },
];

const testimonials = [
  {
    clientName: "Ankit Aggarwal",
    company: "Hardware Manufacturing Group",
    message:
      "As we expanded internationally, the team provided the strategic and technical consulting we needed to scale confidently.",
    order: 1,
  },
  {
    clientName: "Girish Bajaj",
    company: "Process Pack Pvt. Ltd.",
    message:
      "They took the time to understand our manufacturing business and delivered a practical digital strategy that worked.",
    order: 2,
  },
  {
    clientName: "James Naples",
    company: "Naples Commercial Roofing",
    message:
      "Our lead generation was completely transformed with smart SEO and advertising strategies within budget.",
    order: 3,
  },
];

const clients = [
  { name: "Aakar", logo: "/uploads/clients/aakar.png", order: 1 },
  { name: "Novartis", logo: "/uploads/clients/novartis.png", order: 2 },
  { name: "KPMG", logo: "/uploads/clients/kpmg.png", order: 3 },
  { name: "BBC", logo: "/uploads/clients/bbc.png", order: 4 },
];

const run = async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "Admin@123";

  const existing = await Admin.findOne({ email });
  if (!existing) {
    await Admin.create({ name: "Super Admin", email, password, role: "superadmin" });
    console.log(`Admin created -> email: ${email} | password: ${password}`);
  } else {
    console.log("Admin already exists, skipping.");
  }

  await Service.deleteMany({});
  await Service.insertMany(services);

  await TeamMember.deleteMany({});
  await TeamMember.insertMany(team);

  await Testimonial.deleteMany({});
  await Testimonial.insertMany(testimonials);

  await Client.deleteMany({});
  await Client.insertMany(clients);

  console.log("Database seeded successfully");
  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
