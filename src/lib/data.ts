import { IMG } from "./images";

export type Discipline = {
  index: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

export const disciplines: Discipline[] = [
  {
    index: "01",
    title: "Construction",
    summary: "Buildings engineered to last for generations.",
    detail:
      "Turnkey construction of villas, residences and hotels — from foundations to final finish — with rigorous site supervision and a single point of accountability.",
    points: [
      "Turnkey build & delivery",
      "Structural & MEP engineering",
      "In-house site supervision",
      "Premium material sourcing",
    ],
  },
  {
    index: "02",
    title: "Real Estate",
    summary: "Curated sales, lettings and investment assets.",
    detail:
      "A select portfolio of completed and off-plan properties across West Crete, matched to owners and investors with transparency and long-term thinking.",
    points: [
      "Sales & resales",
      "Off-plan acquisition",
      "Investment advisory",
      "Rental & management",
    ],
  },
  {
    index: "03",
    title: "Project Management",
    summary: "Clarity and control across every milestone.",
    detail:
      "We manage budget, programme and quality across the full lifecycle — coordinating architects, engineers and contractors so owners always know where things stand.",
    points: [
      "Budget & programme control",
      "Permits & compliance",
      "Procurement & logistics",
      "Quality assurance",
    ],
  },
  {
    index: "04",
    title: "Development",
    summary: "From land selection to a delivered destination.",
    detail:
      "End-to-end property development — identifying land, shaping the vision, financing, designing and delivering mixed-use and hospitality projects that endure.",
    points: [
      "Land sourcing & feasibility",
      "Concept & master planning",
      "Hospitality & mixed-use",
      "Exit & delivery strategy",
    ],
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "20+", label: "Years of experience in West Crete" },
  { value: "14", label: "International award-winning projects" },
  { value: "250+", label: "Completed real-estate units delivered" },
  { value: "60,000", label: "m² of space for investment" },
];

export type Step = {
  index: string;
  title: string;
  body: string;
};

export const process: Step[] = [
  {
    index: "01",
    title: "Land & Vision",
    body: "We begin with the site — reading its orientation, views and constraints — and shape a clear vision grounded in feasibility, planning and return.",
  },
  {
    index: "02",
    title: "Design",
    body: "Our architects and engineers translate the brief into refined, buildable design — balancing Cretan craft with contemporary living and energy performance.",
  },
  {
    index: "03",
    title: "Construction",
    body: "An in-house construction team builds with daily supervision, premium materials and transparent reporting through every stage to handover.",
  },
  {
    index: "04",
    title: "Delivery & Care",
    body: "We hand over turnkey, fully finished properties — and stay close afterwards with management, maintenance and rental support for lasting value.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Nikos Skarakis",
    role: "Chairman & CEO",
    bio: "Sets the company vision and strategy while leading major developments from concept to delivery.",
    image: IMG.p1,
  },
  {
    name: "Kostas Skarakis",
    role: "Development Manager",
    bio: "Leads new developments — from land selection and feasibility through to final handover.",
    image: IMG.p2,
  },
  {
    name: "Manolis Pantelakis",
    role: "Construction Manager",
    bio: "Runs every construction site with daily supervision and uncompromising quality control.",
    image: IMG.p3,
  },
  {
    name: "Antonis Louladakis",
    role: "Real Estate Sales Manager",
    bio: "Drives property sales and manages investor relations across the West Crete portfolio.",
    image: IMG.p4,
  },
  {
    name: "Chrysanthi Tsoulakou",
    role: "Architect Engineer",
    bio: "Designs architecture that balances function, context and quiet contemporary aesthetics.",
    image: IMG.p7,
  },
  {
    name: "Vaggelis Cheiladakis",
    role: "Civil Engineer",
    bio: "Oversees structural design, technical studies and on-site compliance and inspections.",
    image: IMG.p5,
  },
  {
    name: "Katerina Stathaki",
    role: "Interior Designer",
    bio: "Creates interior schemes with thoughtful layouts, finishes and furnishing throughout.",
    image: IMG.p8,
  },
  {
    name: "Spiros Pittidis",
    role: "Project Engineer",
    bio: "Combines engineering detail with visual design for plans, studies and presentations.",
    image: IMG.p6,
  },
];

export type Partner = { name: string; note: string };

export const partners: Partner[] = [
  { name: "Ten Brinke", note: "Strategic development partner" },
  { name: "Ble Collection", note: "Exclusive hospitality partner in Crete" },
];

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "From the first sketch to the keys, Hellenic Homes delivered with rare precision. Our villa in Almyrida is everything we hoped for — and more.",
    author: "Private Owner",
    context: "Miraida Exclusive Residence",
  },
  {
    quote:
      "They understood the site, the light and the local craft. The result feels timeless rather than trendy.",
    author: "Hotel Operator",
    context: "Aloe Suites, Almyrida",
  },
  {
    quote:
      "Every step was explained before it happened. We always knew what was going on — and never felt rushed.",
    author: "Elena M.",
    context: "Apartment owner, Chania",
  },
  {
    quote:
      "We have worked with many developers. Few combine this level of design with this level of build quality.",
    author: "Investment Group",
    context: "Gerola Apartments",
  },
  {
    quote:
      "From permits to the final walkthrough, everything was handled with calm precision. A genuinely seamless build.",
    author: "Andreas & Maria",
    context: "Stalos Concept villas",
  },
  {
    quote:
      "They found us an off-plan opportunity, guided the purchase, and delivered exactly what was promised — on time.",
    author: "Sophia L.",
    context: "Buyer, Kolymvari",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What types of properties do you develop?",
    a: "Villas, private residences, apartment buildings, boutique hotels and mixed-use projects across West Crete. We work on both new builds and the sensitive restoration of heritage buildings.",
  },
  {
    q: "Can you manage a project from land to handover?",
    a: "Yes. Because design, engineering, construction and management sit under one roof, a single accountable team can carry your project from land selection and concept through to a turnkey, fully finished delivery.",
  },
  {
    q: "Do you sell properties off-plan?",
    a: "We do. Our real-estate portfolio includes both completed homes and off-plan opportunities. We can walk you through timelines, finishes and expected delivery before any commitment.",
  },
  {
    q: "How long does a typical build take?",
    a: "It depends on scale and complexity, but a private villa usually moves from permits to handover in 12 to 18 months. We share a realistic programme early and report against it throughout.",
  },
  {
    q: "Can you handle permits and legal compliance?",
    a: "Absolutely. Planning permissions, building permits and regulatory compliance are managed in-house, in coordination with our engineers and local authorities, so nothing is left to chance.",
  },
  {
    q: "Do you support properties after delivery?",
    a: "Yes. We offer property management, maintenance and rental support so your asset is cared for and continues to perform long after the keys are handed over.",
  },
];
