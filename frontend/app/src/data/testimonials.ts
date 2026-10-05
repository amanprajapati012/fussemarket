export interface TestimonialItem {
  _id: string;
  clientName: string;
  company: string;
  message: string;
  photo?: string;
}

export const defaultTestimonials: TestimonialItem[] = [
  {
    _id: "1",
    clientName: "Ankit Aggarwal",
    company: "Hardware Manufacturing Group",
    message:
      "As we expanded internationally, the team provided the strategic and technical consulting we needed to scale confidently.",
  },
  {
    _id: "2",
    clientName: "Girish Bajaj",
    company: "Process Pack Pvt. Ltd.",
    message:
      "They took the time to understand our manufacturing business and delivered a practical digital strategy that worked.",
  },
  {
    _id: "3",
    clientName: "James Naples",
    company: "Naples Commercial Roofing",
    message:
      "Our lead generation was completely transformed with smart SEO and advertising strategies within budget.",
  },
  {
    _id: "4",
    clientName: "Khalid",
    company: "DSS Roofing",
    message:
      "Smart search strategies gave us a significant competitive advantage in our local market.",
  },
];
