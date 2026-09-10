import {
  Building2,
  Factory,
  Settings2,
  Fence,
  Layers3,
  Warehouse,
  Trees,
  Wrench,
} from "lucide-react";

/**
 * ============================================================
 * WELLDONE METALWORKS
 * SERVICES DATA
 * ============================================================
 *
 * Structure:
 *
 * /services
 * /services/[service]
 * /services/[service]/[subservice]
 *
 * 8 Main Services
 * 32 Sub Services
 *
 * Primary Material:
 * Mild Steel
 * ============================================================
 */

export const services = [
  // ============================================================
  // 01 — STRUCTURAL FABRICATION
  // ============================================================
  {
    id: "structural-fabrication",
    slug: "structural-fabrication",
    number: "01",
    title: "Structural Fabrication",
    shortTitle: "Structural Fabrication",
    eyebrow: "Structural Metalwork",

    description:
      "Strong and precise fabricated structures developed for commercial, industrial and project-specific requirements.",

    detailDescription:
      "Welldone Metalworks provides project-specific Mild Steel structural fabrication for applications where strength, dimensions and practical site requirements need to be considered.",

    material: "Mild Steel",
    application: "Structural Fabrication",
    category: "Commercial / Industrial",
    icon: Building2,

    image: "/gallery/heavy/heavy_convenstional01.jpg",

    items: [
      {
        id: "structural-frames",
        number: "01",
        name: "Structural Frames",
        slug: "structural-frames",
        href: "/services/structural-fabrication/structural-frames",
        description:
          "Fabricated Mild Steel frames developed according to project dimensions and structural requirements.",
      },
      {
        id: "support-structures",
        number: "02",
        name: "Support Structures",
        slug: "support-structures",
        href: "/services/structural-fabrication/support-structures",
        description:
          "Custom support structures fabricated for equipment, structures and project-specific applications.",
      },
      {
        id: "heavy-fabrication",
        number: "03",
        name: "Heavy Fabrication",
        slug: "heavy-fabrication",
        href: "/services/structural-fabrication/heavy-fabrication",
        description:
          "Heavy Mild Steel fabrication for demanding structural and conventional fabrication requirements.",
      },
      {
        id: "custom-structures",
        number: "04",
        name: "Custom Structures",
        slug: "custom-structures",
        href: "/services/structural-fabrication/custom-structures",
        description:
          "Project-specific fabricated structures developed around dimensions, application and site conditions.",
      },
    ],

    applications: [
      "Commercial projects",
      "Industrial applications",
      "Structural frameworks",
      "Project-specific structures",
    ],

    considerations: [
      "Project dimensions",
      "Structural requirements",
      "Material requirements",
      "Site conditions",
      "Installation requirements",
    ],
  },

  // ============================================================
  // 02 — INDUSTRIAL FABRICATION
  // ============================================================
  {
    id: "industrial-fabrication",
    slug: "industrial-fabrication",
    number: "02",
    title: "Industrial Fabrication",
    shortTitle: "Industrial Fabrication",
    eyebrow: "Industrial Metalwork",

    description:
      "Reliable Mild Steel fabrication solutions developed for industrial applications, equipment and supporting structures.",

    detailDescription:
      "Industrial fabrication is carried out according to the application, dimensions and practical requirements of the project. Structures and fabricated components can be developed for industrial environments and project-specific use.",

    material: "Mild Steel",
    application: "Industrial Fabrication",
    category: "Industrial / Commercial",
    icon: Factory,

    image: "/gallery/heavy/heavy_convenstional02.jpg",

    items: [
      {
        id: "industrial-frames",
        number: "01",
        name: "Industrial Frames",
        slug: "industrial-frames",
        href: "/services/industrial-fabrication/industrial-frames",
        description:
          "Mild Steel industrial frames fabricated according to equipment, layout and project requirements.",
      },
      {
        id: "machine-structures",
        number: "02",
        name: "Machine Structures",
        slug: "machine-structures",
        href: "/services/industrial-fabrication/machine-structures",
        description:
          "Fabricated structures designed to support machinery and related industrial applications.",
      },
      {
        id: "platforms",
        number: "03",
        name: "Platforms",
        slug: "platforms",
        href: "/services/industrial-fabrication/platforms",
        description:
          "Industrial Mild Steel platforms fabricated according to required dimensions and site conditions.",
      },
      {
        id: "industrial-supports",
        number: "04",
        name: "Industrial Supports",
        slug: "industrial-supports",
        href: "/services/industrial-fabrication/industrial-supports",
        description:
          "Supporting structures developed for industrial equipment, systems and project requirements.",
      },
    ],

    applications: [
      "Industrial facilities",
      "Machine support applications",
      "Industrial platforms",
      "Commercial projects",
    ],

    considerations: [
      "Equipment requirements",
      "Available dimensions",
      "Load requirements",
      "Site conditions",
      "Installation requirements",
    ],
  },

  // ============================================================
  // 03 — CUSTOM METAL FABRICATION
  // ============================================================
  {
    id: "custom-metal-fabrication",
    slug: "custom-metal-fabrication",
    number: "03",
    title: "Custom Metal Fabrication",
    shortTitle: "Custom Metal Fabrication",
    eyebrow: "Made-to-Measure Fabrication",

    description:
      "Made-to-measure Mild Steel fabrication developed around exact project dimensions, application and practical requirements.",

    detailDescription:
      "Welldone Metalworks provides custom Mild Steel fabrication for projects where standard products do not meet the required dimensions or application. The fabrication approach is based on the specific project requirement.",

    material: "Mild Steel",
    application: "Custom Fabrication",
    category: "Residential / Commercial / Industrial",
    icon: Settings2,

    image: "/gallery/heavy/heavy_convenstional03.jpg",

    items: [
      {
        id: "custom-fabrication",
        number: "01",
        name: "Custom Fabrication",
        slug: "custom-fabrication",
        href: "/services/custom-metal-fabrication/custom-fabrication",
        description:
          "Custom fabricated Mild Steel work developed according to individual project requirements.",
      },
      {
        id: "precision-fabrication",
        number: "02",
        name: "Precision Fabrication",
        slug: "precision-fabrication",
        href: "/services/custom-metal-fabrication/precision-fabrication",
        description:
          "Fabrication focused on required dimensions, fit and project-specific component requirements.",
      },
      {
        id: "sheet-fabrication",
        number: "03",
        name: "Sheet Fabrication",
        slug: "sheet-fabrication",
        href: "/services/custom-metal-fabrication/sheet-fabrication",
        description:
          "Mild Steel sheet fabrication for custom project applications and fabricated components.",
      },
      {
        id: "project-fabrication",
        number: "04",
        name: "Project Fabrication",
        slug: "project-fabrication",
        href: "/services/custom-metal-fabrication/project-fabrication",
        description:
          "Project-based fabrication planned around dimensions, application and site requirements.",
      },
    ],

    applications: [
      "Custom metalwork",
      "Project-specific fabrication",
      "Commercial requirements",
      "Residential requirements",
    ],

    considerations: [
      "Required dimensions",
      "Application",
      "Material requirements",
      "Project drawings or references",
      "Installation requirements",
    ],
  },

  // ============================================================
  // 04 — GATES & RAILINGS
  // ============================================================
  {
    id: "gates-railings",
    slug: "gates-railings",
    number: "04",
    title: "Gates & Railings",
    shortTitle: "Gates & Railings",
    eyebrow: "Architectural Metalwork",

    description:
      "Durable Mild Steel gates and railing solutions fabricated for residential, commercial and project-specific applications.",

    detailDescription:
      "Welldone Metalworks fabricates Mild Steel gates and railings according to the available dimensions, location, intended application and overall project requirements.",

    material: "Mild Steel",
    application: "Gates & Railings",
    category: "Residential / Commercial",
    icon: Fence,

    image: "/gallery/railing/ralling01.jpg",

    items: [
      {
        id: "main-gates",
        number: "01",
        name: "Main Gates",
        slug: "main-gates",
        href: "/services/gates-railings/main-gates",
        description:
          "Custom Mild Steel main gates fabricated according to entrance dimensions and project requirements.",
      },
      {
        id: "entrance-gates",
        number: "02",
        name: "Entrance Gates",
        slug: "entrance-gates",
        href: "/services/gates-railings/entrance-gates",
        description:
          "Entrance gate fabrication for residential and commercial properties.",
      },
      {
        id: "balcony-railings",
        number: "03",
        name: "Balcony Railings",
        slug: "balcony-railings",
        href: "/services/gates-railings/balcony-railings",
        description:
          "Mild Steel balcony railings fabricated according to location, dimensions and application.",
      },
      {
        id: "staircase-railings",
        number: "04",
        name: "Staircase Railings",
        slug: "staircase-railings",
        href: "/services/gates-railings/staircase-railings",
        description:
          "Custom staircase railing fabrication for residential and commercial applications.",
      },
    ],

    applications: [
      "Residential properties",
      "Commercial buildings",
      "Main entrances",
      "Balconies and staircases",
    ],

    considerations: [
      "Opening dimensions",
      "Railing height",
      "Design requirements",
      "Installation location",
      "Site conditions",
    ],
  },

  // ============================================================
  // 05 — STAIRCASE FABRICATION
  // ============================================================
  {
    id: "staircase-fabrication",
    slug: "staircase-fabrication",
    number: "05",
    title: "Staircase Fabrication",
    shortTitle: "Staircase Fabrication",
    eyebrow: "Access Structures",

    description:
      "Mild Steel staircase structures developed for residential, commercial and industrial access requirements.",

    detailDescription:
      "Welldone Metalworks fabricates project-specific Mild Steel staircase structures based on available space, required dimensions, access requirements and installation conditions.",

    material: "Mild Steel",
    application: "Staircase Structure",
    category: "Residential / Commercial / Industrial",
    icon: Layers3,

    image: "/gallery/heavy/heavy_convenstional04.jpg",

    items: [
      {
        id: "straight-staircases",
        number: "01",
        name: "Straight Staircases",
        slug: "straight-staircases",
        href: "/services/staircase-fabrication/straight-staircases",
        description:
          "Straight Mild Steel staircase structures developed according to available space and dimensions.",
      },
      {
        id: "spiral-staircases",
        number: "02",
        name: "Spiral Staircases",
        slug: "spiral-staircases",
        href: "/services/staircase-fabrication/spiral-staircases",
        description:
          "Space-conscious spiral staircase structures fabricated for project-specific requirements.",
      },
      {
        id: "industrial-stairs",
        number: "03",
        name: "Industrial Stairs",
        slug: "industrial-stairs",
        href: "/services/staircase-fabrication/industrial-stairs",
        description:
          "Industrial staircase fabrication for access, maintenance and project-specific applications.",
      },
      {
        id: "fire-escape-stairs",
        number: "04",
        name: "Fire Escape Stairs",
        slug: "fire-escape-stairs",
        href: "/services/staircase-fabrication/fire-escape-stairs",
        description:
          "Mild Steel fire escape stair structures fabricated around project and site requirements.",
      },
    ],

    applications: [
      "Residential staircases",
      "Commercial buildings",
      "Industrial access",
      "Maintenance access",
    ],

    considerations: [
      "Available space",
      "Required height",
      "Stair configuration",
      "Access requirements",
      "Installation conditions",
    ],
  },

  // ============================================================
  // 06 — SHEDS & CANOPIES
  // ============================================================
  {
    id: "sheds-canopies",
    slug: "sheds-canopies",
    number: "06",
    title: "Sheds & Canopies",
    shortTitle: "Sheds & Canopies",
    eyebrow: "Covered Structures",

    description:
      "Functional Mild Steel covered structures fabricated for industrial, commercial, parking and entrance applications.",

    detailDescription:
      "Welldone Metalworks fabricates Mild Steel supporting structures for sheds and canopies based on available space, dimensions, intended use and site conditions.",

    material: "Mild Steel",
    application: "Covered Structure",
    category: "Industrial / Commercial / Residential",
    icon: Warehouse,

    image: "/gallery/roof/polycarbonate_roof01.jpg",

    items: [
      {
        id: "industrial-sheds",
        number: "01",
        name: "Industrial Sheds",
        slug: "industrial-sheds",
        href: "/services/sheds-canopies/industrial-sheds",
        description:
          "Mild Steel shed structures developed for industrial and project-specific covered spaces.",
      },
      {
        id: "warehouse-sheds",
        number: "02",
        name: "Warehouse Sheds",
        slug: "warehouse-sheds",
        href: "/services/sheds-canopies/warehouse-sheds",
        description:
          "Fabricated warehouse shed structures planned around available dimensions and application.",
      },
      {
        id: "parking-sheds",
        number: "03",
        name: "Parking Sheds",
        slug: "parking-sheds",
        href: "/services/sheds-canopies/parking-sheds",
        description:
          "Mild Steel parking shed structures for residential, commercial and other covered parking areas.",
      },
      {
        id: "entrance-canopies",
        number: "04",
        name: "Entrance Canopies",
        slug: "entrance-canopies",
        href: "/services/sheds-canopies/entrance-canopies",
        description:
          "Entrance canopy structures fabricated according to building frontage and project requirements.",
      },
    ],

    applications: [
      "Industrial spaces",
      "Warehouse areas",
      "Parking areas",
      "Building entrances",
    ],

    considerations: [
      "Available footprint",
      "Required coverage",
      "Roofing material",
      "Site conditions",
      "Supporting structure",
    ],
  },

  // ============================================================
  // 07 — GAZEBOS & OUTDOOR
  // ============================================================
  {
    id: "gazebos-outdoor",
    slug: "gazebos-outdoor",
    number: "07",
    title: "Gazebos & Outdoor",
    shortTitle: "Gazebos & Outdoor",
    eyebrow: "Outdoor Fabrication",

    description:
      "Stylish Mild Steel outdoor structures developed for residential gardens, commercial spaces and custom outdoor applications.",

    detailDescription:
      "Welldone Metalworks fabricates project-specific Mild Steel gazebos and outdoor structures based on available space, intended use, dimensions and site requirements.",

    material: "Mild Steel",
    application: "Outdoor Structure",
    category: "Residential / Commercial",
    icon: Trees,

    image: "/gallery/gazebo/gazebo01.jpg",

    items: [
      {
        id: "garden-gazebos",
        number: "01",
        name: "Garden Gazebos",
        slug: "garden-gazebos",
        href: "/services/gazebos-outdoor/garden-gazebos",
        description:
          "Custom Mild Steel garden gazebos fabricated according to available space and intended use.",
      },
      {
        id: "outdoor-structures",
        number: "02",
        name: "Outdoor Structures",
        slug: "outdoor-structures",
        href: "/services/gazebos-outdoor/outdoor-structures",
        description:
          "Project-specific outdoor structures designed around space and application requirements.",
      },
      {
        id: "seating-structures",
        number: "03",
        name: "Seating Structures",
        slug: "seating-structures",
        href: "/services/gazebos-outdoor/seating-structures",
        description:
          "Fabricated outdoor seating structures for gardens, commercial spaces and outdoor areas.",
      },
      {
        id: "custom-gazebos",
        number: "04",
        name: "Custom Gazebos",
        slug: "custom-gazebos",
        href: "/services/gazebos-outdoor/custom-gazebos",
        description:
          "Custom gazebo fabrication developed around project dimensions, form and intended application.",
      },
    ],

    applications: [
      "Garden spaces",
      "Residential outdoor areas",
      "Commercial outdoor spaces",
      "Outdoor seating areas",
    ],

    considerations: [
      "Available footprint",
      "Required dimensions",
      "Intended usage",
      "Site conditions",
      "Installation requirements",
    ],
  },

  // ============================================================
  // 08 — WELDING & INSTALLATION
  // ============================================================
  {
    id: "welding-installation",
    slug: "welding-installation",
    number: "08",
    title: "Welding & Installation",
    shortTitle: "Welding & Installation",
    eyebrow: "Fabrication Support",

    description:
      "Professional welding, assembly and on-site installation services supporting project-specific fabrication requirements.",

    detailDescription:
      "Welldone Metalworks provides welding and installation support for Mild Steel fabrication projects, including workshop and on-site requirements where applicable.",

    material: "Mild Steel",
    application: "Welding & Installation",
    category: "Project-based",
    icon: Wrench,

    image: "/gallery/heavy/heavy_convenstional05.jpg",

    items: [
      {
        id: "mig-welding",
        number: "01",
        name: "MIG Welding",
        slug: "mig-welding",
        href: "/services/welding-installation/mig-welding",
        description:
          "MIG welding support for suitable Mild Steel fabrication and project applications.",
      },
      {
        id: "arc-welding",
        number: "02",
        name: "Arc Welding",
        slug: "arc-welding",
        href: "/services/welding-installation/arc-welding",
        description:
          "Arc welding for project-specific Mild Steel fabrication requirements.",
      },
      {
        id: "on-site-welding",
        number: "03",
        name: "On-Site Welding",
        slug: "on-site-welding",
        href: "/services/welding-installation/on-site-welding",
        description:
          "On-site welding support where the project requires fabrication or joining at the installation location.",
      },
      {
        id: "installation",
        number: "04",
        name: "Installation",
        slug: "installation",
        href: "/services/welding-installation/installation",
        description:
          "Installation and assembly support for fabricated Mild Steel structures and components.",
      },
    ],

    applications: [
      "Workshop fabrication",
      "On-site fabrication",
      "Structure assembly",
      "Project installation",
    ],

    considerations: [
      "Project scope",
      "Site accessibility",
      "Installation location",
      "Fabrication requirements",
      "On-site conditions",
    ],
  },
];

/**
 * ============================================================
 * SERVICE PROCESS
 * ============================================================
 */

export const serviceProcess = [
  {
    number: "01",
    title: "Requirement",
    description:
      "Understand the fabrication requirement, intended application and overall project scope.",
  },
  {
    number: "02",
    title: "Project Discussion",
    description:
      "Discuss the proposed work, dimensions, application and practical requirements.",
  },
  {
    number: "03",
    title: "Dimensions / Site Details",
    description:
      "Review available dimensions and relevant site information where required.",
  },
  {
    number: "04",
    title: "Fabrication",
    description:
      "Fabricate the required Mild Steel components according to the agreed project requirements.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Installation is carried out where it forms part of the project requirement.",
  },
];

/**
 * ============================================================
 * SERVICE COVERAGE
 * ============================================================
 */

export const serviceCoverage = [
  {
    city: "Ahmedabad",
    description:
      "Custom Mild Steel fabrication for residential, commercial and project-specific requirements.",
  },
  {
    city: "Gandhinagar",
    description:
      "Fabrication support for project requirements including structures, railings and related MS work.",
  },
];

/**
 * ============================================================
 * HELPERS
 * ============================================================
 */

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getSubServiceBySlug = (serviceSlug, subServiceSlug) => {
  const service = getServiceBySlug(serviceSlug);

  if (!service) return null;

  return service.items?.find((item) => item.slug === subServiceSlug) || null;
};

export const getAllSubServices = () => {
  return services.flatMap((service) =>
    (service.items || []).map((item) => ({
      ...item,
      parentService: service.title,
      parentSlug: service.slug,
      parentNumber: service.number,
    }))
  );
};