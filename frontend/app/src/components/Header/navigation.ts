import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Megaphone,
  Palette,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

export type NavigationIcon = typeof Code2;

export type MegaMenuItem = {
  title: string;
  description?: string;
  href: string;
  icon: NavigationIcon;
};

export type MegaMenuGroup = {
  title: string;
  description: string;
  href: string;
  icon: NavigationIcon;
  items: MegaMenuItem[];
};

export type NavigationItem = {
  label: string;
  href: string;
  groups?: MegaMenuGroup[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Software & Product Development",
        description:
          "Build powerful, scalable and user-focused digital products for your business.",
        href: "/services/software-product-development",
        icon: Code2,
        items: [
          {
            title: "Custom Software Development",
            description: "Tailored software built around your business needs.",
            href: "/services/custom-software-development",
            icon: Code2,
          },
          {
            title: "Enterprise Software Development",
            description: "Scalable solutions for growing organizations.",
            href: "/services/enterprise-software-development",
            icon: Database,
          },
          {
            title: "Product Development",
            description: "Turn ideas into market-ready digital products.",
            href: "/services/product-development",
            icon: Settings2,
          },
          {
            title: "Web Application Development",
            description: "Modern, responsive and high-performance web apps.",
            href: "/services/Web-Development",
            icon: Globe2,
          },
          {
            title: "Mobile Application Development",
            description: "Engaging Android and iOS mobile experiences.",
            href: "/services/App-Development",
            icon: Smartphone,
          },
          {
            title: "Cloud Application Development",
            description: "Cloud-native applications designed to scale.",
            href: "/services/cloud-solution",
            icon: Cloud,
          },
        ],
      },

      {
        title: "IT Infrastructure & Cloud",
        description:
          "Reliable infrastructure and cloud solutions designed for performance and growth.",
        href: "/services/it-infrastructure-cloud",
        icon: Cloud,
        items: [
          {
            title: "Cloud Infrastructure",
            description: "Flexible and scalable cloud environments.",
            href: "/services/cloud-strategy-infrastructure-consulting",
            icon: Cloud,
          },
          {
            title: "Hybrid Infrastructure",
            description: "Connect cloud and on-premise environments.",
            href: "/services/hybrid-infrastructure",
            icon: Database,
          },
          {
            title: "On-Premises Infrastructure",
            description: "Secure and dependable infrastructure management.",
            href: "/services/on-premises-infrastructure",
            icon: Database,
          },
        {
  title: "Migration",
  description: "Seamlessly migrate your applications, data, and workloads with minimal disruption.",
  href: "/services/migration",
  icon: ArrowRight,
},

          {
            title: "System Integration",
            description:
              "Connect systems, applications and business processes.",
            href: "/services/integration",
            icon: Settings2,
          },
          {
            title: "DevOps",
            description: "Automate development, deployment and infrastructure.",
            href: "/services/DevOps",
            icon: Code2,
          },
        ],
      },

      {
        title: "Digital Marketing & Growth",
        description:
          "Grow your online presence with performance-focused digital marketing strategies.",
        href: "/services/marketing/digital-marketing",
        icon: Megaphone,
        items: [
          {
            title: "Digital Marketing",
            description: "Full-service digital marketing for modern brands.",
            href: "/services/marketing/digital-marketing",
            icon: Megaphone,
          },
          {
            title: "influencer-marketing",
            description: "Campaigns focused on measurable business results.",
            href: "/services/marketing/influencer-marketing",
            icon: ArrowRight,
          },
          {
            title: "Online Reputation Management",
            description: "Build stronger connections across social platforms.",
            href: "/services/marketing/online-reputation-management",
            icon: Megaphone,
          },
          {
            title: "Influencer Marketing",
            description: "Connect your brand with the right creators.",
            href: "/services/influencer-marketing",
            icon: Globe2,
          },
          
          {
            title: "Digital Consultation",
            description: "Strategic guidance for your digital growth journey.",
            href: "/services/marketing/digital-advisory-and-consultation",
            icon: CheckCircle2,
          },
        ],
      },

      {
        title: "UI / UX & Creative Design",
        description:
          "Create memorable digital experiences with thoughtful UI, UX and visual design.",
        href: "/services/ui-ux",
        icon: Palette,
        items: [
          {
            title: "UI / UX Design",
            description: "Beautiful interfaces designed around users.",
            href: "/services/ui-ux",
            icon: Palette,
          },
          {
            title: "Website Design",
            description: "Premium websites that represent your brand.",
            href: "/services/website-design",
            icon: Globe2,
          },
          {
            title: "Mobile App Design",
            description: "Intuitive mobile experiences for modern users.",
            href: "/services/mobile-app-design",
            icon: Smartphone,
          },
          {
            title: "Product Design",
            description: "From concept and wireframes to polished experiences.",
            href: "/services/product-design",
            icon: Settings2,
          },
          {
            title: "Brand Identity",
            description: "Build a consistent and memorable brand presence.",
            href: "/services/brand-identity",
            icon: Palette,
          },
        ],
      },

      {
        title: "Testing & QA",
        description:
          "Improve product quality with structured testing and quality assurance.",
        href: "/services/testing-qa",
        icon: CheckCircle2,
        items: [
          {
            title: "Manual Testing",
            description: "Detailed functional and usability testing.",
            href: "/services/manual-testing",
            icon: CheckCircle2,
          },
          {
            title: "Automation Testing",
            description: "Automated testing for faster and reliable releases.",
            href: "/services/automation-testing",
            icon: Settings2,
          },
          {
            title: "Performance Testing",
            description:
              "Ensure your applications perform under real-world load.",
            href: "/services/performance-testing",
            icon: ArrowRight,
          },
          {
            title: "API Testing",
            description: "Validate APIs for reliability and functionality.",
            href: "/services/api-testing",
            icon: Code2,
          },
        ],
      },

      {
        title: "Strategy & Managed Support",
        description:
          "Keep your technology aligned with business goals through strategy and ongoing support.",
        href: "/services/strategy-managed-support",
        icon: BriefcaseBusiness,
        items: [
          {
            title: "Digital Transformation",
            description:
              "Modernize processes and technology for long-term growth.",
            href: "/solutions/digital-transformation",
            icon: Globe2,
          },
          {
            title: "Technology Consulting",
            description:
              "Make informed technology decisions with expert guidance.",
            href: "/services/technology-consulting",
            icon: BriefcaseBusiness,
          },
          {
            title: "Application Support",
            description:
              "Keep business-critical applications running smoothly.",
            href: "/services/application-support",
            icon: Settings2,
          },
          {
            title: "Infrastructure Support",
            description: "Reliable monitoring and infrastructure assistance.",
            href: "/services/infrastructure-support",
            icon: Cloud,
          },
          {
            title: "Business Technology Consulting",
            description:
              "Align technology investments with business objectives.",
            href: "/services/business-technology-consulting",
            icon: BriefcaseBusiness,
          },
        ],
      },
    ],
  },

  {
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        title: "Business Solutions",
        description:
          "Digital solutions that help businesses improve efficiency and customer experiences.",
        href: "/solutions/business-solutions",
        icon: BriefcaseBusiness,
        items: [
          {
            title: "Business Automation",
            description:
              "Automate repetitive processes and improve productivity.",
            href: "/solutions/automation",
            icon: Settings2,
          },
          {
            title: "CRM Solutions",
            description: "Manage customers, leads and business relationships.",
            href: "/solutions/crm",
            icon: Database,
          },
          {
            title: "Business Applications",
            description: "Purpose-built applications for business operations.",
            href: "/solutions/business-applications",
            icon: Code2,
          },
        ],
      },

      {
        title: "Enterprise Solutions",
        description:
          "Scalable enterprise technology for complex business requirements.",
        href: "/solutions/enterprise-solutions",
        icon: Database,
        items: [
          {
            title: "Enterprise Applications",
            description: "Robust applications for enterprise workflows.",
            href: "/solutions/enterprise-applications",
            icon: Database,
          },
          {
            title: "Enterprise Automation",
            description: "Streamline large-scale business operations.",
            href: "/solutions/enterprise-automation",
            icon: Settings2,
          },
          {
            title: "Data & Analytics",
            description: "Turn business data into actionable insights.",
            href: "/solutions/data-analytics",
            icon: Database,
          },
        ],
      },

      {
        title: "E-commerce Solutions",
        description:
          "Complete commerce experiences designed to help brands sell and grow online.",
        href: "/solutions/ecommerce",
        icon: ShoppingCart,
        items: [
          {
            title: "E-commerce Development",
            description: "High-performance online stores for growing brands.",
            href: "/solutions/ecommerce",
            icon: ShoppingCart,
          },
          {
            title: "Marketplace Development",
            description: "Build multi-vendor digital marketplaces.",
            href: "/solutions/marketplace",
            icon: ShoppingCart,
          },
          {
            title: "E-commerce Automation",
            description:
              "Automate orders, customers and operational workflows.",
            href: "/solutions/ecommerce-automation",
            icon: Settings2,
          },
        ],
      },

      {
        title: "Digital Transformation",
        description:
          "Modernize your business with technology, automation and digital experiences.",
        href: "/solutions/digital-transformation",
        icon: Globe2,
        items: [
          {
            title: "Digital Transformation",
            description:
              "Modern technology strategies for evolving businesses.",
            href: "/solutions/digital-transformation",
            icon: Globe2,
          },
          {
            title: "Process Automation",
            description: "Reduce manual work through intelligent automation.",
            href: "/solutions/automation",
            icon: Settings2,
          },
          {
            title: "Legacy Modernization",
            description: "Upgrade outdated applications and technology stacks.",
            href: "/solutions/legacy-modernization",
            icon: Code2,
          },
        ],
      },

      {
        title: "Automation",
        description:
          "Intelligent automation solutions that reduce manual effort and improve efficiency.",
        href: "/solutions/automation",
        icon: Settings2,
        items: [
          {
            title: "Business Process Automation",
            description: "Automate everyday business workflows.",
            href: "/solutions/business-process-automation",
            icon: Settings2,
          },
          {
            title: "Workflow Automation",
            description: "Connect processes and teams through smart workflows.",
            href: "/solutions/workflow-automation",
            icon: ArrowRight,
          },
          {
            title: "AI Automation",
            description: "Use intelligent automation to accelerate operations.",
            href: "/solutions/ai-automation",
            icon: Code2,
          },
        ],
      },
    ],
  },

  {
    label: "Industries",
    href: "/industries",
    groups: [
      {
        title: "Healthcare",
        description:
          "Secure and scalable technology solutions for healthcare organizations.",
        href: "/industries/healthcare",
        icon: ShieldCheck,
        items: [
          {
            title: "Healthcare Software",
            description: "Digital platforms for healthcare operations.",
            href: "/industries/healthcare/software",
            icon: ShieldCheck,
          },
          {
            title: "Hospital Management",
            description:
              "Technology solutions for modern healthcare management.",
            href: "/industries/healthcare/hospital-management",
            icon: Database,
          },
          {
            title: "Healthcare Applications",
            description: "User-friendly digital experiences for healthcare.",
            href: "/industries/healthcare/applications",
            icon: Smartphone,
          },
        ],
      },

      {
        title: "Education",
        description:
          "Digital platforms that improve learning and education management.",
        href: "/industries/education",
        icon: Globe2,
        items: [
          {
            title: "Education Software",
            description: "Technology solutions for educational institutions.",
            href: "/industries/education/software",
            icon: Code2,
          },
          {
            title: "School Management",
            description: "Simplify school administration and operations.",
            href: "/industries/education/school-management",
            icon: Database,
          },
          {
            title: "Learning Platforms",
            description: "Engaging digital learning experiences.",
            href: "/industries/education/learning-platforms",
            icon: Globe2,
          },
        ],
      },

      {
        title: "Retail & E-commerce",
        description:
          "Digital commerce solutions for retailers and online-first brands.",
        href: "/industries/retail-ecommerce",
        icon: ShoppingCart,
        items: [
          {
            title: "Retail Software",
            description: "Technology designed for modern retail operations.",
            href: "/industries/retail-ecommerce/retail-software",
            icon: ShoppingCart,
          },
          {
            title: "E-commerce Platforms",
            description: "Scalable online stores and commerce experiences.",
            href: "/industries/retail-ecommerce/ecommerce",
            icon: ShoppingCart,
          },
          {
            title: "Retail Automation",
            description: "Automate operations and customer workflows.",
            href: "/industries/retail-ecommerce/automation",
            icon: Settings2,
          },
        ],
      },

      {
        title: "Real Estate",
        description:
          "Technology solutions that simplify property management and real estate operations.",
        href: "/industries/real-estate",
        icon: Database,
        items: [
          {
            title: "Real Estate Software",
            description: "Custom software for real estate businesses.",
            href: "/industries/real-estate/software",
            icon: Database,
          },
          {
            title: "Property Management",
            description: "Manage properties, tenants and operations digitally.",
            href: "/industries/real-estate/property-management",
            icon: Settings2,
          },
          {
            title: "Real Estate Platforms",
            description: "Modern property discovery and management platforms.",
            href: "/industries/real-estate/platforms",
            icon: Globe2,
          },
        ],
      },
    ],
  },

  {
    label: "Company",
    href: "/company",
    groups: [
      {
        title: "About Us",
        description:
          "Learn about our company, capabilities and approach to digital solutions.",
        href: "/about",
        icon: BriefcaseBusiness,
        items: [
          {
            title: "About Us",
            description: "Discover who we are and what we do.",
            href: "/about",
            icon: BriefcaseBusiness,
          },
          {
            title: "Our Approach",
            description: "Understand how we work with our clients.",
            href: "/company/approach",
            icon: CheckCircle2,
          },
          {
            title: "Our Process",
            description: "From idea to launch, see how we deliver projects.",
            href: "/company/process",
            icon: Settings2,
          },
        ],
      },

      {
        title: "Our Team",
        description:
          "Meet the people behind our products, technology and digital solutions.",
        href: "/company/team",
        icon: Globe2,
        items: [
          {
            title: "Leadership",
            description: "Meet our leadership team.",
            href: "/company/team/leadership",
            icon: BriefcaseBusiness,
          },
          {
            title: "Our Team",
            description: "Meet the experts building digital experiences.",
            href: "/company/team",
            icon: Globe2,
          },
        ],
      },

      {
        title: "Careers",
        description:
          "Explore opportunities to grow your career with our technology team.",
        href: "/careers",
        icon: Smartphone,
        items: [
          {
            title: "Open Positions",
            description: "Explore current career opportunities.",
            href: "/careers",
            icon: BriefcaseBusiness,
          },
          {
            title: "Life at Fusse Market",
            description: "Discover our culture and working environment.",
            href: "/company/life-at-fusse-market",
            icon: Globe2,
          },
        ],
      },

      {
        title: "Contact",
        description:
          "Have a project in mind? Let's discuss how we can help your business grow.",
        href: "/contact",
        icon: ArrowRight,
        items: [
          {
            title: "Contact Us",
            description: "Talk to our team about your project.",
            href: "/contact",
            icon: ArrowRight,
          },
          {
            title: "Request a Quote",
            description: "Share your requirements and get in touch.",
            href: "/contact",
            icon: BriefcaseBusiness,
          },
        ],
      },
    ],
  },
];

export const standaloneNavigation = [
  {
    label: "Clients",
    href: "/clients",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default navigation;
