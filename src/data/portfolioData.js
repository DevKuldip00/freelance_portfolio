// ==========================================================================
// KULDIPSINH SODHAPARMAR — PORTFOLIO DATA REPOSITORY
// Verified client projects, mobile applications, services, and credentials
// ==========================================================================

export const PERSONAL_INFO = {
  name: "Kuldipsinh Sodhaparmar",
  brandName: "KULDIP.",
  tagline: "Independent Website & Mobile App Developer",
  location: "Gujarat, India",
  timezone: "Asia/Kolkata",
  availability: "Available for select projects",
  email: "kuldipsodha1849@gmail.com",
  phone: "+91 9327338336",
  phoneFormatted: "+91 93273 38336",
  linkedin: "https://www.linkedin.com/in/kuldip-sodhaparmar/",
  whatsapp: "https://wa.me/919327338336?text=Hi%20Kuldip%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
};

export const WEB_PROJECTS = [
  {
    id: "bsf-gym",
    number: "01",
    featured: true,
    size: "large", // Large featured
    name: "BSF THE GYM",
    category: "Fitness / Business Website",
    tagline: "Built By Discipline",
    summary: "High-impact web experience for Vadodara's premier strength training facility, featuring interactive facility tours, membership tier exploration, and WhatsApp enquiry integration.",
    liveUrl: "https://bsfgym-l9ia.vercel.app/",
    image: "/assets/images/bsf_gym_preview.jpg",
    tags: ["Fitness & Athletics", "High-Impact UI", "WhatsApp Conversion", "Mobile-First"],
    highlights: [
      "Calibrated heavy iron, power cage & curved runner showcase",
      "Interactive membership tier exploration with transparent guidance",
      "Direct WhatsApp and instant click-to-call conversion flows",
      "Cinematic dark aesthetic with high-visibility electric accents"
    ],
    architecture: {
      role: "Lead UI/UX Designer & Frontend Developer",
      focus: "Brand authority & membership lead generation",
      tech: ["HTML5 / Modern JS", "Vite", "Responsive CSS Grid", "Interactive Lightbox"]
    }
  },
  {
    id: "dr-kunj",
    number: "02",
    featured: false,
    size: "medium", // Medium
    name: "Dr. Kunj Patel — Clinical Dermatology",
    category: "Healthcare / Doctor Website",
    tagline: "Transformative Medical Care & Clinical Aesthetics",
    summary: "Refined digital presence for M.D. Dermatologist Dr. Kunj Patel, detailing clinical treatments, trichology hair restoration, and laser procedures across Anand & Nadiad hospitals.",
    liveUrl: "https://drkunj-xh8r.vercel.app/",
    image: "/assets/images/dr_kunj_preview.jpg",
    tags: ["Healthcare", "Editorial Layout", "Appointment Booking", "Clinical Trust"],
    highlights: [
      "Structured clinical dermatology & trichology treatment catalogs",
      "Dual-hospital practice schedules (IRIS Anand & Dr. Jayant Shah Nadiad)",
      "Warm ivory and sage clinical aesthetic designed to build patient trust",
      "Clean, friction-free WhatsApp consultation enquiry path"
    ],
    architecture: {
      role: "Digital Strategist & Frontend Developer",
      focus: "Patient credibility & specialist appointment conversion",
      tech: ["React / Vite", "Tailored Typography", "Responsive Navigation", "Clinical UX"]
    }
  },
  {
    id: "balaji-interior",
    number: "03",
    featured: false,
    size: "medium", // Medium
    name: "Balaji Interior Designer",
    category: "Interior Design / Business Website",
    tagline: "Bespoke Residential & Commercial Spaces",
    summary: "Visual-led digital showcase for an Anand-based luxury interior studio, emphasizing contemporary living rooms, modular kitchens, and bespoke architectural woodwork.",
    liveUrl: "https://balaji-interior-gold.vercel.app/",
    image: "/assets/images/balaji_interior_preview.jpg",
    tags: ["Architecture & Interior", "Visual Portfolio", "Local Business SEO", "Bespoke Design"],
    highlights: [
      "Immersive project galleries with categorized residential spaces",
      "Modular kitchen and bespoke joinery architectural showcases",
      "Local business SEO schema markup for Anand and central Gujarat",
      "Direct quote & design consultation enquiry journeys"
    ],
    architecture: {
      role: "UI/UX & Web Developer",
      focus: "Visual storytelling & design consultation requests",
      tech: ["React / Vite", "Editorial Serif System", "Structured Data (JSON-LD)", "Fluid Layout"]
    }
  },
  {
    id: "shivam-sales",
    number: "04",
    featured: true,
    size: "full", // Full-width distinctive
    name: "Shivam Sales & Furniture",
    category: "Furniture / Retail Showroom",
    tagline: "Elevate Your Living Space With Handcrafted Quality",
    summary: "Comprehensive showroom e-catalog presenting handcrafted wooden furniture, home appliances, and marriage gift combos with direct WhatsApp pricing enquiries.",
    liveUrl: "https://shivamsales.vercel.app/",
    image: "/assets/images/shivam_sales_preview.jpg",
    tags: ["Retail E-Catalog", "WhatsApp Commerce", "Multi-Category Browsing", "Showroom Pricing"],
    highlights: [
      "Extensive furniture catalog: double beds, sectional sofas, dining sets",
      "Curated marriage gift combo packages with appliance bundles",
      "Dynamic WhatsApp product enquiry with pre-filled item titles",
      "Showroom announcement banner & interactive location map"
    ],
    architecture: {
      role: "Full-Lifecycle Web Developer",
      focus: "Retail product exploration & conversational commerce",
      tech: ["Vite", "Dynamic Config Layer", "Vanilla CSS Components", "WhatsApp Commerce API"]
    }
  }
];

export const MOBILE_APPS = [
  {
    id: "fitsangha",
    name: "FitSangha",
    category: "AI-Powered Fitness & Community Application",
    descriptor: "Next-generation running and fitness companion with personalized AI coaching and real-time geospatial tracking.",
    image: "/assets/images/fitsangha_app_mockup.jpg",
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "PostGIS", "Gemini AI", "MVVM"],
    capabilities: [
      {
        title: "GPS Workout Tracking & Route Visualization",
        desc: "High-precision outdoor route mapping, live trajectory rendering, and real-time split calculations."
      },
      {
        title: "Distance & Pace Analysis",
        desc: "Kinetic analytics delivering cadence, elevation profiles, and comparative segment pacing."
      },
      {
        title: "Personalized AI Fitness Assistant",
        desc: "Gemini AI integration delivering contextual training advice, post-run summaries, and recovery guidance."
      },
      {
        title: "Activity Streaks & Community Leaderboards",
        desc: "Social motivation loops with streak preservation, mutual accountability, and regional leaderboards."
      },
      {
        title: "Geospatial Stack with Privacy Safeguards",
        desc: "PostGIS-powered spatial indexing with user-defined route privacy zones around home and work."
      }
    ]
  },
  {
    id: "udhaario",
    name: "Udhaario",
    category: "AI-Powered Expense-Splitting Application",
    descriptor: "Intelligent shared-expense tracker featuring AI vision receipt extraction and debt settlement graph optimization.",
    image: "/assets/images/udhaario_app_mockup.jpg",
    stack: ["Flutter", "Dart", "Firebase", "Gemini Vision API", "Riverpod", "MVVM"],
    capabilities: [
      {
        title: "Receipt Scanning via Gemini Vision API",
        desc: "Point-and-shoot camera integration that extracts itemized charges, taxes, and totals from paper receipts."
      },
      {
        title: "Shared Group Expense Management",
        desc: "Flexible split options: equal share, exact amount, percentage, or itemized bill assignments."
      },
      {
        title: "Debt Settlement Graph Optimization",
        desc: "Algorithmic minimization of inter-member payment transactions across large trip groups."
      },
      {
        title: "Real-Time Data Synchronization",
        desc: "Instant live updates across group members with offline persistence and conflict resolution."
      },
      {
        title: "Secure Authentication & Permissions",
        desc: "Robust Firebase authentication, encrypted storage, and group invitation security controls."
      }
    ]
  }
];

export const SERVICES = [
  {
    id: "business-websites",
    number: "01",
    title: "Business & Brand Websites",
    headline: "Websites that build authority and generate qualified business enquiries.",
    description: "Tailor-made web experiences built from scratch for service businesses, clinics, retail showrooms, gyms, and regional enterprises. Clean typography, fast loading speeds, and clear calls to action that turn visitors into paying clients.",
    deliverables: [
      "Custom responsive design & clean code",
      "WhatsApp & click-to-call conversion paths",
      "Local SEO & structured data markup",
      "High performance on 4G and mobile devices"
    ],
    badge: "Most Requested"
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing Pages & Website Redesigns",
    headline: "Transform underperforming pages into high-converting digital assets.",
    description: "Whether launching a new offering or overhauling an outdated corporate website, I refine information architecture, elevate visual presentation, and remove friction from the customer journey.",
    deliverables: [
      "Conversion-focused wireframing & copy structure",
      "Modern editorial visual redesign",
      "Speed & Core Web Vitals optimization",
      "Seamless migration without SEO disruption"
    ],
    badge: "High Impact"
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Mobile Application Development",
    headline: "Cross-platform Android & iOS applications built with Flutter.",
    description: "Native-performance mobile applications engineered with clean MVVM architecture, state management (Riverpod/Provider), and solid backend integration using Firebase or Supabase.",
    deliverables: [
      "Single codebase for Android & iOS",
      "Smooth 60fps animations & gesture interactions",
      "Offline caching & local data storage",
      "RESTful API & cloud service integration"
    ],
    badge: "Core Specialization"
  },
  {
    id: "ai-apps",
    number: "04",
    title: "AI-Powered Applications",
    headline: "Practical AI capabilities that solve real business problems.",
    description: "Integration of modern AI APIs (such as Google Gemini, Gemini Vision, and multimodal models) for intelligent document parsing, automated receipt processing, smart search, and contextual assistance.",
    deliverables: [
      "Gemini API & Vision model integration",
      "Document & image data extraction",
      "Contextual conversational assistants",
      "Privacy-conscious prompt engineering & caching"
    ],
    badge: "Emerging Tech"
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX & Digital Product Design",
    headline: "Thoughtful interface design grounded in user needs and business clarity.",
    description: "Design systems, interactive prototypes, and polished user journeys. Every layout choice is deliberate—maximizing readability, intuitive navigation, and visual elegance.",
    deliverables: [
      "Information architecture & user journey mapping",
      "Component design systems & token libraries",
      "Mobile-first responsive interface design",
      "Micro-animations & transition design"
    ],
    badge: "Art Directed"
  }
];

export const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding your business goals",
    description: "We dive deep into your target audience, business model, competitive landscape, and primary conversion goals. No assumptions—just clarity on what success looks like."
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Information architecture & visual direction",
    description: "Establishing the typographic scale, editorial visual hierarchy, key user flows, and wireframes. We design with purpose so every element guides the visitor forward."
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Clean, robust implementation",
    description: "Developing the responsive website or Flutter mobile application. Writing performant, semantic, maintainable code with micro-interactions and smooth performance."
  },
  {
    step: "04",
    title: "Refine & Launch",
    subtitle: "Testing, optimization & deployment",
    description: "Testing across desktop, tablet, and mobile devices. Verifying enquiry flows, tuning Core Web Vitals, setting up analytics and SEO metadata, followed by seamless launch."
  }
];

export const VERIFIED_TECH_STACK = [
  { name: "Flutter", category: "Mobile", verified: true },
  { name: "Dart", category: "Language", verified: true },
  { name: "Java", category: "Language", verified: true },
  { name: "Firebase", category: "Backend / Auth", verified: true },
  { name: "Supabase", category: "Backend / DB", verified: true },
  { name: "PostgreSQL", category: "Database", verified: true },
  { name: "PostGIS", category: "Geospatial", verified: true },
  { name: "Gemini API", category: "AI & Vision", verified: true },
  { name: "HTML5 / CSS3", category: "Frontend", verified: true },
  { name: "JavaScript / ES6+", category: "Frontend", verified: true },
  { name: "React & Vite", category: "Web Framework", verified: true },
  { name: "Three.js / WebGL", category: "3D Graphics", verified: true },
  { name: "Riverpod / MVVM", category: "Architecture", verified: true },
  { name: "Git & GitHub", category: "DevOps / Versioning", verified: true }
];
