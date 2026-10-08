export type MegaMenuItem = {
  title: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  href: string;
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
        href: "/services/software-product-development",
        items: [
          {
            title: "Custom Software Development",
            href: "/services/custom-software-development",
          },
          {
            title: "Enterprise Software Development",
            href: "/services/enterprise-software-development",
          },
          {
            title: "Product Development",
            href: "/services/product-development",
          },
          {
            title: "Web Application Development",
            href: "/services/Web-Development",
          },
          {
            title: "Mobile Application Development",
            href: "/services/App-Development",
          },
          {
            title: "Cloud Application Development",
            href: "/services/cloud-solution",
          },
        ],
      },

      {
        title: "IT Infrastructure & Cloud",
        href: "/services/it-infrastructure-cloud",
        items: [
          {
            title: "Cloud Infrastructure",
            href: "/services/cloud-strategy-infrastructure-consulting",
          },
          {
            title: "Hybrid Infrastructure",
            href: "/services/hybrid-infrastructure",
          },
          {
            title: "On-Premises Infrastructure",
            href: "/services/on-premises-infrastructure",
          },
          {
            title: "Migration",
            href: "/services/migration",
          },
          {
            title: "System Integration",
            href: "/services/integration",
          },
          {
            title: "DevOps",
            href: "/services/DevOps",
          },
        ],
      },

      {
        title: "Digital Marketing & Growth",
        href: "/services/marketing/digital-marketing",
        items: [
          {
            title: "Digital Marketing",
            href: "/services/marketing/digital-marketing",
          },
          {
            title: "Influencer Marketing",
            href: "/services/marketing/influencer-marketing",
          },
          {
            title: "Online Reputation Management",
            href: "/services/marketing/online-reputation-management",
          },
          {
            title: "Improved ROI",
            href: "/services/marketing/improved-roi",
          },
          {
            title: "Digital Consultation",
            href: "/services/marketing/digital-advisory-and-consultation",
          },
        ],
      },

      {
        title: "Testing & QA",
        href: "/services/testing-qa",
        items: [
          {
            title: "Manual Testing",
            href: "/services/manual-testing",
          },
          {
            title: "Automation Testing",
            href: "/services/automation-testing",
          },
        ],
      },

      {
        title: "Strategy & Managed Support",
        href: "/services/strategy-managed-support",
        items: [
          {
            title: "Application Support",
            href: "/services/application-support-and-management",
          },
          {
            title: "Infrastructure Support",
            href: "/services/it-infrastructure-support",
          },
          {
            title: "Customer Support",
            href: "/services/Customer-Support",
          },
          {
            title: "Digital Transformation",
            href: "/services/digital-transformation",
          },
          {
            title: "Business Consulting Support",
            href: "/services/business-technology-consulting",
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
        href: "/industries/healthcare",
        items: [
          {
            title: "Healthcare Software",
            href: "/industries/healthcare/software",
          },
          {
            title: "Hospital Management",
            href: "/industries/healthcare/hospital-management",
          },
          {
            title: "Healthcare Applications",
            href: "/industries/healthcare/applications",
          },
        ],
      },

      {
        title: "Education",
        href: "/industries/education",
        items: [
          {
            title: "Education Software",
            href: "/industries/education/software",
          },
          {
            title: "School Management",
            href: "/industries/education/school-management",
          },
          {
            title: "Learning Platforms",
            href: "/industries/education/learning-platforms",
          },
        ],
      },

      {
        title: "Retail & E-commerce",
        href: "/industries/retail-ecommerce",
        items: [
          {
            title: "Retail Software",
            href: "/industries/retail-ecommerce/retail-software",
          },
          {
            title: "E-commerce Platforms",
            href: "/industries/retail-ecommerce/ecommerce",
          },
          {
            title: "Retail Automation",
            href: "/industries/retail-ecommerce/automation",
          },
        ],
      },

      {
        title: "Real Estate",
        href: "/industries/real-estate",
        items: [
          {
            title: "Real Estate Software",
            href: "/industries/real-estate/software",
          },
          {
            title: "Property Management",
            href: "/industries/real-estate/property-management",
          },
          {
            title: "Real Estate Platforms",
            href: "/industries/real-estate/platforms",
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
        href: "/about",
        items: [
          {
            title: "About Us",
            href: "/about",
          },
          {
            title: "Our Approach",
            href: "/company/approach",
          },
          {
            title: "Our Process",
            href: "/company/process",
          },
        ],
      },

      {
        title: "Our Team",
        href: "/company/team",
        items: [
          {
            title: "Leadership",
            href: "/company/team/leadership",
          },
          {
            title: "Our Team",
            href: "/company/team",
          },
        ],
      },

      {
        title: "Careers",
        href: "/careers",
        items: [
          {
            title: "Open Positions",
            href: "/careers",
          },
          {
            title: "Life at Fusse Market",
            href: "/company/life-at-fusse-market",
          },
        ],
      },

      {
        title: "Contact",
        href: "/contact",
        items: [
          {
            title: "Contact Us",
            href: "/contact",
          },
          {
            title: "Request a Quote",
            href: "/contact",
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
