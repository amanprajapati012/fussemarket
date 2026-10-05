// Static navigation / mega-menu structure for the header.
// Editing this file changes the whole site's nav — it is intentionally
// not database-driven since nav structure changes far less often than
// content like services or testimonials.

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: NavColumn[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: [
      {
        heading: "Software & Product",
        links: [
          { label: "Custom Software Development", href: "/services#custom-software" },
          { label: "Mobile App Development", href: "/services#mobile-apps" },
          { label: "Web Application Development", href: "/services#web-apps" },
          { label: "Product Engineering", href: "/services#product-engineering" },
        ],
      },
      {
        heading: "Infrastructure & Cloud",
        links: [
          { label: "Cloud Infrastructure", href: "/services#cloud" },
          { label: "DevOps & Automation", href: "/services#devops" },
          { label: "Migration & Integration", href: "/services#migration" },
        ],
      },
      {
        heading: "Marketing & Growth",
        links: [
          { label: "Digital Marketing", href: "/services#marketing" },
          { label: "SEO & Content", href: "/services#seo" },
          { label: "Brand Strategy", href: "/services#brand" },
        ],
      },
      {
        heading: "Quality & Support",
        links: [
          { label: "Testing & QA", href: "/services#qa" },
          { label: "Managed IT Support", href: "/services#support" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: [
      {
        heading: "Platforms",
        links: [
          { label: "Enterprise CRM", href: "/solutions#crm" },
          { label: "ERP Implementation", href: "/solutions#erp" },
          { label: "E-Commerce Platforms", href: "/solutions#ecommerce" },
          { label: "Data & Analytics", href: "/solutions#data" },
        ],
      },
      {
        heading: "Industries",
        links: [
          { label: "Healthcare", href: "/solutions#healthcare" },
          { label: "Banking & Finance", href: "/solutions#finance" },
          { label: "Education", href: "/solutions#education" },
          { label: "Real Estate", href: "/solutions#real-estate" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    megaMenu: [
      {
        heading: "About Us",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Leadership Team", href: "/about#team" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Case Studies", href: "/about#testimonials" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];
