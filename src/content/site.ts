/**
 * Central content file for Lusean Child's Trust Foundation.
 *
 * EDITING GUIDE
 * -------------
 * Everything the website displays is defined in this file:
 *   org            — organisation identity + contact details
 *   contactStatus  — contact details are hidden until verified (set `verified: true`)
 *   stats          — verified foundation-wide impact figures
 *   programs       — program areas
 *   schools        — verified school projects (set `flagship: true` to feature)
 *   outreach       — community outreach initiatives (not counted as schools)
 *   partners       — leave empty until verified partner names/logos are supplied
 *   news / stories — leave empty until real, permission-cleared content is supplied
 *   givingTiers    — leave empty until real program costs are verified
 *
 * IMPORTANT: only add verified information here. Sections with no verified
 * content automatically hide themselves or show an editable placeholder.
 */



/** Authentic Lusean Child's Trust Foundation documentary photographs. */
export const photos = {
 boreholeCommunity: "/Borehole_Lupili_2.jpeg",
 boreholePlaque: "/Borehole_Lupili_EV.jpeg",
staffToilets: "/Lupili_toilet_web.jpeg",
  booksAndShoes: "/Lupili_text_book_shoes_web.jpeg",
  feeding: "/Feeding.jpeg",
  schoolShoes: "/Shoe.jpeg",
  textbooks: "/Text_books.jpeg",
  wusakileOutreach: "/Wusakile_Outreach.jpeg",
  schoolEngagement: "/Rv_web_1.jpeg",
};

const education = photos.textbooks;
const water = photos.boreholePlaque;
const mentorship = photos.schoolShoes;
const school = photos.booksAndShoes;
const feeding = photos.feeding;
const heroChildren = photos.schoolEngagement;
const founderPhoto = { url: "/chaplain-sean-chirwa.jpeg" };
const assistantDirectorPhoto = { url: "/chaplain-luyando-sean.jpeg" };

export const org = {
  name: "Lusean Child's Trust Foundation",
  shortName: "Lusean Child's Trust",
  tagline: "Changing and Giving Hope to a Child.",
  coreMessage: "Creating Change. Adding Value. Activating Hope.",
  country: "Zambia",
  operationalArea: "Kitwe, Copperbelt Province, Zambia",
  founded: "2018",
  operationsCommenced: "June 2023",
  faithIdentity:
    "Lusean Child's Trust Foundation is a faith-based (Christian) humanitarian organization committed to serving vulnerable and marginalized children and communities through practical humanitarian action.",
  faithValues: [
    "Love",
    "Compassion",
    "Integrity",
    "Dignity",
    "Respect",
    "Responsible Stewardship",
  ],
  intro:
    "Lusean Child's Trust Foundation is a faith-based (Christian) Zambian child-focused organisation working in Kitwe, Copperbelt Province. Founded in 2018 and operational since June 2023, the Foundation works through schools and directly within communities to improve access to education, school essentials, feeding and basic needs, water and sanitation, and support for vulnerable children.",
};

/**
 * Verified public contact details supplied by the Foundation.
 * Edit here to update the contact page, footer and enquiry sections.
 */
export const contactStatus = {
  verified: true,
  email: "luseanchildstrust@gmail.com",
  /** Primary number (kept for simple single-number displays). */
  phone: "+260 977 657 855",
  phones: [
    { label: "Zambia (Mobile / WhatsApp)", number: "+260 977 657 855", whatsapp: true },
    { label: "United States (Mobile)", number: "+1 352 855 2021", whatsapp: false },
  ],
  address: "P.O. Box MT50, Kitwe, Zambia",
  officeHours: "08:00 AM – 5:30 PM",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1DE5WppXGa/?mibextid=wwXIfr",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@luseanchilds-o6v?si=XaKL_iACKYQnFhKq",
    },
  ] as { label: string; href: string }[],
  placeholder:
    "Our official contact details are currently being finalised and will be published here shortly.",
};


/** Registration / charity details — publish only once verified. */
export const registration = {
  verified: false,
  placeholder:
    "Registration and governance details will be published here once verification is complete.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Our Impact", to: "/impact" },
  { label: "Projects", to: "/projects" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Partners", to: "/partners" },
  { label: "News & Stories", to: "/news" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const images = { education, water, mentorship, school, feeding, heroChildren };

/** Alt text for authentic photographs — verified information only. */
export const photoAlt = {
  boreholeCommunity:
    "Pupils and community members gathered around the borehole installed by Lusean Child's Trust Foundation at Lupili Primary School",
  boreholePlaque:
    "Borehole hand pump with a plaque reading 'Installed by Lusean Child's Trust' at Lupili Primary School",
  staffToilets: "Newly built staff toilet facility at Lupili Primary School",
  booksAndShoes:
    "Tables laid out with school shoes and textbooks prepared for distribution by Lusean Child's Trust Foundation",
  feeding: "Young learners seated at a table being served a meal through the Foundation's feeding programme",
  schoolShoes: "A learner holding a new pair of school shoes provided by the Foundation",
  textbooks: "Learners in school uniform holding up new textbooks provided by the Foundation",
  wusakileOutreach:
    "Foundation team addressing children and families at the Wusakile community back-to-school outreach",
  schoolEngagement: "Foundation team member speaking with learners during a school engagement",
};

/**
 * Photographs on the site are authentic Lusean Child's Trust Foundation
 * documentation. If temporary illustrative images are ever used again, set
 * `usingPlaceholders: true` so the illustrative notice reappears.
 */
export const photography = {
  usingPlaceholders: false,
  notice:
    "Photographs on this page are authentic Lusean Child's Trust Foundation project documentation.",
  shortLabel: "Illustrative image",
};

/* ---------------------------------------------------------------- Programs */

export type Program = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "education-support",
    title: "Education Support",
    summary:
      "Textbooks, exercise books, stationery, rulers and other educational resources for learners.",
    detail:
      "We supply the learning materials that schools and vulnerable learners lack — textbooks, exercise books, rulers, writing pads and office stationery — so that teaching and learning can continue without interruption.",
    image: education,
  },
  {
    slug: "school-essentials",
    title: "School Essentials",
    summary:
      "School uniforms, jerseys, shoes and backpacks that help vulnerable children participate confidently.",
    detail:
      "Many children stay away from school simply because they lack a uniform, shoes or a bag. We provide school uniforms, jerseys, shoes and backpacks so that every child can attend with confidence and dignity.",
    image: school,
  },
  {
    slug: "feeding-basic-needs",
    title: "Feeding & Basic Needs",
    summary:
      "Feeding initiatives and practical support for vulnerable children in schools and communities.",
    detail:
      "A hungry child cannot learn. Our feeding initiatives serve learners in supported schools and community outreach events, alongside practical items that meet immediate basic needs.",
    image: feeding,
  },
  {
    slug: "water-sanitation-school-development",
    title: "Water, Sanitation & School Development",
    summary:
      "Borehole and sanitation infrastructure supporting healthier, more effective learning environments.",
    detail:
      "Through our school development work we deliver water and sanitation infrastructure — including a borehole and staff toilet facilities — that makes schools healthier places to teach and learn.",
    image: water,
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    summary:
      "Direct engagement with communities to identify needs and deliver practical support.",
    detail:
      "We collect beneficiary information directly from within communities to identify children and families requiring support, then organise outreach events that deliver practical assistance where it is needed most.",
    image: heroChildren,
  },
  {
    slug: "child-support",
    title: "Child Support",
    summary:
      "Targeted assistance for vulnerable children, including educational support such as examination fees.",
    detail:
      "Where an individual child faces a specific barrier — such as unpaid examination fees — we provide targeted assistance so that their education is not interrupted.",
    image: mentorship,
  },
];

/* ------------------------------------------------------------------ Impact */

export type Stat = { value: string; label: string; note?: string };

export const stats: Stat[] = [
  {
    value: "200,000+",
    label: "Children Reached",
    note: "Children reached through Foundation programs, initiatives and outreach activities.",
  },
  {
    value: "17+",
    label: "Schools Supported",
    note: "Schools reached through educational, feeding, material-support and community-development initiatives.",
  },
  {
    value: "25",
    label: "Communities Reached",
    note: "Communities reached through Foundation programs, outreach and community initiatives.",
  },
  {
    value: "5,000+",
    label: "Educational Resources Provided",
    note: "Educational materials and learning resources provided to support children's access to education.",
  },
  {
    value: "3,800+",
    label: "Feeding & Basic Needs Beneficiaries",
    note: "Children and beneficiaries reached through feeding and basic-needs initiatives.",
  },
  {
    value: "1",
    label: "Borehole",
    note: "One borehole delivered through our water, sanitation and school/community development work.",
  },
  {
    value: "2",
    label: "Staff Toilet Facilities",
    note: "Two staff toilet facilities delivered through our school development initiatives.",
  },
  {
    value: "2",
    label: "Partners",
    note: "Verified partners supporting the work of the Foundation.",
  },
  {
    value: "16",
    label: "Volunteers",
    note: "Volunteers contributing their time and service toward our mission.",
  },
];

/* --------------------------------------------------------- School projects */

export type SchoolProject = {
  slug: string;
  name: string;
  flagship?: boolean;
  /** Short editorial line. Only add text that is verified. */
  note?: string;
  support: string[];
  image: string;
};

export const schools: SchoolProject[] = [
  {
    slug: "lupili-primary-school",
    name: "Lupili Primary School",
    flagship: true,
    note: "A flagship school-development project combining education, water and sanitation infrastructure and children's basic needs in one integrated intervention.",
    support: ["1 borehole", "2 staff toilets", "100 textbooks", "26 pairs of school shoes"],
    image: photos.boreholeCommunity,
  },
  {
    slug: "miyombo-combined-school",
    name: "Miyombo Combined School",
    flagship: true,
    support: ["100 textbooks", "100 exercise books", "623 learners fed"],
    image: feeding,
  },
  {
    slug: "mapaosa-combined-school",
    name: "Mapaosa Combined School",
    flagship: true,
    support: [
      "430 exercise books",
      "86 rulers",
      "86 learners supported with school supplies, including uniforms and backpacks",
      "86 pairs of school shoes",
      "Examination fees paid for a vulnerable child",
    ],
    image: education,
  },
  {
    slug: "trust-community-school",
    name: "Trust Community School",
    flagship: true,
    support: [
      "300 learners fed",
      "260 exercise books",
      "26 learners supported with school supplies, including uniforms, backpacks and school shoes",
      "80 Bibles",
      "100 rulers",
      "120 assorted gifts, including toys, clothes and writing pads",
    ],
    image: school,
  },
  {
    slug: "riverside-extension-school",
    name: "Riverside Extension School",
    support: ["100 textbooks"],
    image: education,
  },
  {
    slug: "nazreen-primary-school",
    name: "Nazreen Primary School",
    support: ["100 textbooks", "15 pairs of school shoes"],
    image: school,
  },
  {
    slug: "twatotela-primary-school",
    name: "Twatotela Primary School",
    support: ["20 pairs of school shoes", "200 learners fed"],
    image: feeding,
  },
  {
    slug: "kanfinsa-missions-school",
    name: "Kanfinsa Missions School",
    support: ["100 textbooks", "16 school jerseys", "400 learners fed", "5 pairs of school shoes"],
    image: heroChildren,
  },
  {
    slug: "kakolo-combined-school",
    name: "Kakolo Combined School",
    support: ["100 textbooks", "100 exercise books", "12 school uniforms", "20 pairs of school shoes"],
    image: education,
  },
  {
    slug: "comis-primary-school",
    name: "Comis Primary School",
    support: ["108 textbooks", "20 school jerseys"],
    image: school,
  },
  {
    slug: "luyando-primary-school",
    name: "Luyando Primary School",
    support: [
      "100 textbooks",
      "26 school uniforms",
      "26 school jerseys",
      "26 pairs of school shoes",
      "26 backpacks",
    ],
    image: mentorship,
  },
  {
    slug: "kafue-bridge-primary-school",
    name: "Kafue Bridge Primary School",
    support: ["100 textbooks"],
    image: education,
  },
  {
    slug: "nsansa-primary-school",
    name: "Nsansa Primary School",
    support: ["100 textbooks"],
    image: school,
  },
  {
    slug: "twafweni-primary-school",
    name: "Twafweni Primary School",
    support: ["98 textbooks", "Office stationery", "16 school jerseys"],
    image: education,
  },
  {
    slug: "bushfire-combined-school",
    name: "Bushfire Combined School",
    support: ["630 learners fed"],
    image: feeding,
  },
  {
    slug: "kamilulu-primary-school",
    name: "Kamilulu Primary School",
    support: ["230 learners fed"],
    image: feeding,
  },
  {
    slug: "ituna-community-school",
    name: "Ituna Community School",
    support: ["200 learners fed"],
    image: heroChildren,
  },
];

/* ------------------------------------------------------ Community outreach */

export type Outreach = {
  slug: string;
  title: string;
  description: string;
  support: string[];
  image: string;
};

export const outreach: Outreach[] = [
  {
    slug: "wusakile-back-to-school-outreach",
    title: "Wusakile Community Back-to-School Outreach",
    description:
      "An open community initiative rather than a school-based project. Lusean Child's Trust Foundation collected beneficiary information directly from within the Wusakile community to identify children and families requiring support, then organised a Back-to-School Community Outreach Event to provide practical assistance.",
    support: ["400 beneficiaries fed", "860 exercise books distributed"],
    image: photos.wusakileOutreach,
  },
];

/* ---------------------------------------- Content awaiting verified supply */

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  quote?: string;
  attribution?: string;
  image: string;
};

/** Add real, permission-cleared stories here. Section hides while empty. */
export const stories: Story[] = [];

export const storiesPlaceholder =
  "Stories of hope from the children, schools and communities we serve will be published here. We publish a child's story only where the family has given informed consent and safeguarding requirements are met.";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

/** Add verified Foundation news here. Section hides while empty. */
export const news: NewsItem[] = [];

export const newsPlaceholder =
  "Updates on Foundation activities, outreach events and school projects will be published here.";

/* ------------------------------- Impact stories (News & Stories page) ----- */

export const storiesIntro = {
  eyebrow: "Stories of Change & Impact",
  title: "Real Work. Real Communities. Real Impact.",
  body: [
    "Lusean Child's Trust Foundation works alongside schools, communities, volunteers and partners to create practical opportunities for vulnerable and marginalized children.",
    "Through education support, school essentials, feeding and basic-needs assistance, water and sanitation improvements, and direct community outreach, the Foundation seeks to create sustainable and meaningful change.",
    "These stories represent authentic work undertaken by Lusean Child's Trust Foundation.",
  ],
};

export const storyCategories = [
  "Education",
  "School Essentials",
  "Feeding & Basic Needs",
  "Water & Sanitation",
  "Community Outreach",
  "Faith in Action",
] as const;

export type StoryCategory = (typeof storyCategories)[number];

export type ImpactStory = {
  slug: string;
  title: string;
  category: StoryCategory;
  /** Optional secondary label shown on the story page (e.g. classification). */
  classification?: string;
  summary: string;
  /** Full story body — one entry per paragraph. Verified information only. */
  body: string[];
  /** Verified support figures. Leave empty when none are verified. */
  support?: string[];
  themes?: string[];
  /** Authentic Lusean photograph. Omit for a clean text-only presentation. */
  image?: string;
  imageAlt?: string;
  /** Optional verified publication date (ISO). Omit rather than inventing one. */
  date?: string;
  /** Optional approved YouTube video id (see `videos`). */
  videoId?: string;
  /** Optional related verified project slug. */
  relatedProject?: string;
};

/**
 * Impact stories. Add new stories here — they appear automatically on
 * /news, in the category filter and at /news/<slug>.
 * Only verified information: no invented names, ages, quotations or dates.
 */
export const impactStories: ImpactStory[] = [
  {
    slug: "lupili-primary-school-water-sanitation-education",
    title: "Water, Sanitation and Education Support at Lupili Primary School",
    category: "Water & Sanitation",
    summary:
      "An integrated school-support project combining water and sanitation infrastructure with textbooks and school shoes for learners.",
    body: [
      "Lupili Primary School represents an important example of Lusean Child's Trust Foundation's integrated approach to school and child support.",
      "A supportive educational environment involves more than classroom instruction. Water, sanitation, educational resources and school essentials can all contribute toward children's wellbeing and their ability to participate in education.",
      "At Lupili Primary School the Foundation delivered a borehole and staff toilet facilities alongside textbooks and school shoes, addressing infrastructure and learning needs together rather than in isolation.",
    ],
    support: ["1 borehole", "2 staff toilets", "100 textbooks", "26 pairs of school shoes"],
    themes: ["Education", "Water", "Sanitation", "Dignity", "Practical Support"],
    image: photos.boreholeCommunity,
    imageAlt: photoAlt.boreholeCommunity,
    relatedProject: "lupili-primary-school",
  },
  {
    slug: "wusakile-community-back-to-school-outreach",
    title: "Taking Back-to-School Support Into the Community",
    category: "Community Outreach",
    classification: "Open community outreach — not a school project",
    summary:
      "Wusakile Community Outreach: an open community initiative providing feeding and back-to-school education support.",
    body: [
      "The Wusakile Community Outreach is an open community initiative rather than a school-based project.",
      "Lusean Child's Trust Foundation collected beneficiary information directly from within the Wusakile community to identify children and families requiring support, then organised a Back-to-School Community Outreach Event to provide practical assistance.",
      "Working in the community itself allows the Foundation to reach children who may not be captured through a single school, supporting back-to-school readiness where families live.",
    ],
    support: ["400 fed", "860 exercise books distributed"],
    themes: [
      "Community Engagement",
      "Back-to-School Readiness",
      "Feeding",
      "Education Support",
      "Hope",
    ],
    image: photos.wusakileOutreach,
    imageAlt: photoAlt.wusakileOutreach,
    relatedProject: "wusakile-back-to-school-outreach",
  },
  {
    slug: "putting-learning-resources-into-childrens-hands",
    title: "Putting Learning Resources Into Children's Hands",
    category: "Education",
    summary:
      "Textbooks, exercise books, rulers, school supplies and educational materials supplied to supported schools and learners.",
    body: [
      "Learning depends on having something to learn with. Lusean Child's Trust Foundation supports children's education by supplying textbooks, exercise books, rulers, backpacks, school supplies and other educational materials to supported schools and learners.",
      "Where documented Foundation activities have included the distribution of Bibles, these are provided as part of the Foundation's Christian identity. Humanitarian assistance is never conditional upon religious participation or belief.",
      "Verified distributions are recorded school by school and community by community, and are published in full on the Projects page.",
    ],
    themes: ["Textbooks", "Exercise books", "Rulers", "School supplies", "Backpacks"],
    image: photos.textbooks,
    imageAlt: photoAlt.textbooks,
  },
  {
    slug: "supporting-education-with-dignity",
    title: "Supporting Education With Dignity",
    category: "School Essentials",
    summary:
      "School shoes, uniforms, jerseys, backpacks and supplies that help children take their place in the classroom with confidence.",
    body: [
      "Practical school essentials can support children's dignity, confidence and participation in education.",
      "Lusean Child's Trust Foundation provides school shoes, uniforms, school jerseys, backpacks and school supplies to children in supported schools and communities.",
      "The Foundation approaches this work as an investment in children's dignity — supporting learners to attend, belong and take part fully alongside their classmates.",
    ],
    themes: ["School shoes", "Uniforms", "School jerseys", "Backpacks", "School supplies"],
    image: photos.booksAndShoes,
    imageAlt: photoAlt.booksAndShoes,
  },
  {
    slug: "nourishing-children-supporting-learning",
    title: "Nourishing Children, Supporting Learning",
    category: "Feeding & Basic Needs",
    summary:
      "Feeding initiatives in supported schools and at community outreach events, meeting basic needs that affect learning.",
    body: [
      "Hunger and unmet basic needs can affect children's wellbeing and their ability to participate in education.",
      "Lusean Child's Trust Foundation runs feeding initiatives in supported schools and at community outreach events, alongside practical items that meet immediate basic needs.",
      "Feeding figures for each school and outreach initiative are recorded individually and published on the Projects page.",
    ],
    image: photos.feeding,
    imageAlt: photoAlt.feeding,
  },
  {
    slug: "faith-expressed-through-service",
    title: "Faith Expressed Through Service",
    category: "Faith in Action",
    summary:
      "As a faith-based Christian humanitarian organization, the Foundation believes compassion should be expressed through practical action.",
    body: [
      "As a faith-based Christian humanitarian organization, Lusean Child's Trust Foundation believes that compassion should be expressed through practical action.",
      "Our Christian identity inspires us to serve children and communities with love, dignity, integrity, compassion and respect, while working alongside schools, communities, volunteers and partners to create meaningful opportunities for children.",
      "Humanitarian assistance is never represented as conditional upon religious participation or belief. Support is offered to children and families on the basis of need alone.",
    ],
    image: photos.schoolEngagement,
    imageAlt: photoAlt.schoolEngagement,
  },
];

/* ------------------------------------------------- Lusean in Action videos */

export type FoundationVideo = {
  /** YouTube video id — add a new approved video by adding its id here. */
  id: string;
  title: string;
  description?: string;
};

export const videoSection = {
  eyebrow: "Lusean in Action",
  title: "See the Mission. Witness the Impact.",
  description:
    "Authentic video content from Lusean Child's Trust Foundation. Select a video to load and play it.",
  channelLabel: "WATCH MORE ON YOUTUBE",
};

/**
 * Approved Lusean Child's Trust Foundation videos.
 * Add a future approved video by appending its YouTube id and a title.
 */
export const videos: FoundationVideo[] = [
  { id: "3XefBT_OFlM", title: "Lusean Child's Trust Foundation — Lusean in Action (1)" },
  { id: "aUi6CQXsmL0", title: "Lusean Child's Trust Foundation — Lusean in Action (2)" },
  { id: "0TYMClfHn7o", title: "Lusean Child's Trust Foundation — Lusean in Action (3)" },
];

/** Verified official YouTube channel (from the social media configuration). */
export const youtubeChannel =
  contactStatus.socials.find((s) => s.label === "YouTube")?.href ?? "";



export type Partner = { name: string; type: string; href?: string; logo?: string };

/** Verified partners / supporters. Logos are added only once approved. */
export const partners: Partner[] = [
  { name: "Mark J. Feather & Natalie Feather", type: "United States of America" },
  { name: "New Beginnings Church", type: "United States of America" },
];

export const partnersPlaceholder =
  "Two partners currently support the work of the Foundation. Their names and approved logos will be displayed here once publication has been confirmed.";

/** Partnership areas open to organisations and individuals. */
export const partnershipAreas = [
  {
    t: "Education Support",
    d: "Textbooks, exercise books, learning materials and educational resources.",
  },
  { t: "Feeding & Basic Needs", d: "Support for feeding initiatives and essential needs." },
  { t: "School Essentials", d: "Shoes, uniforms, jerseys, backpacks and school supplies." },
  { t: "Water & Sanitation", d: "Boreholes, sanitation and related infrastructure." },
  {
    t: "School & Community Development",
    d: "Practical infrastructure and community-development initiatives.",
  },
  {
    t: "Community Outreach",
    d: "Support for direct outreach to vulnerable children, families and communities.",
  },
  {
    t: "Professional & Volunteer Support",
    d: "Skills, expertise, training and appropriate volunteer engagement.",
  },
];

/** Who we welcome as partners. */
export const partnerAudiences = [
  "Corporate organizations",
  "CSR programs",
  "NGOs",
  "Foundations",
  "Churches and faith-based organizations",
  "Educational institutions",
  "Community organizations",
  "International development partners",
  "Individual philanthropists",
  "Professional volunteers",
  "In-kind supporters",
];

/**
 * Suggested giving levels. These are suggestions only and do not guarantee a
 * specific item or outcome.
 */
export const givingTiers: { name: string; amount: string; impact: string }[] = [
  {
    name: "Friend of Lusean",
    amount: "US$25",
    impact: "A meaningful contribution toward the Foundation's humanitarian programs.",
  },
  {
    name: "Hope Supporter",
    amount: "US$50",
    impact: "Supporting continued work in education, basic needs and child-focused initiatives.",
  },
  {
    name: "Child Champion",
    amount: "US$100",
    impact:
      "Helping strengthen programs that create opportunities and activate hope for vulnerable and marginalized children.",
  },
  {
    name: "Community Builder",
    amount: "US$250",
    impact: "Supporting broader school and community-development initiatives.",
  },
  {
    name: "Impact Partner",
    amount: "US$500",
    impact: "Contributing toward sustained humanitarian programs and meaningful community impact.",
  },
  {
    name: "Hope Ambassador",
    amount: "US$1,000+",
    impact:
      "For individuals, families, churches, organizations, companies and supporters wishing to make a significant contribution toward Lusean's mission.",
  },
  {
    name: "Other Amount",
    amount: "Choose Your Own Gift",
    impact: "Give an amount that is appropriate for you — every contribution matters.",
  },
];

/**
 * Indicative program costs supplied by the Foundation. Kwacha amounts are
 * current indicative costs; USD figures are approximate equivalents only.
 */
export const giftInAction = [
  {
    title: "School Shoes for One Child",
    kwacha: "K200",
    usd: "Approx. US$11",
    description:
      "Help provide a child with a pair of school shoes, supporting dignity, confidence and participation in school.",
  },
  {
    title: "100-Textbook Package",
    kwacha: "K6,700",
    usd: "Approx. US$355",
    description:
      "Help provide a package of 100 textbooks to strengthen access to educational resources in a supported school.",
  },
  {
    title: "Feeding Support for One Child",
    kwacha: "K80",
    usd: "Approx. US$4",
    description:
      "Help provide feeding support for one child through Lusean's feeding and basic-needs initiatives.",
  },
  {
    title: "School Uniform for One Child",
    kwacha: "K300",
    usd: "Approx. US$16",
    description:
      "Help provide a school uniform for one child, supporting dignity, confidence and participation in education.",
  },
];

export const currencyNotice =
  "Zambian Kwacha amounts represent current indicative program costs supplied by Lusean Child's Trust Foundation. USD amounts are approximate equivalents only and may vary according to prevailing exchange rates. Program costs may change due to supplier pricing, inflation, transportation, location and other implementation expenses.";

/** Areas a donor may indicate their gift should support. */
export const impactAreas = [
  "Education Support",
  "Feeding & Basic Needs",
  "School Shoes & Essentials",
  "Water & Sanitation",
  "School & Community Development",
  "Community Outreach",
  "Where Most Needed",
];

/** Verified bank transfer details (local, international and USD transfers). */
export const bankDetails = {
  accountName: "Lusean Childs Trust Foundation",
  bank: "Absa Bank Plc",
  accountNumber: "009-1471272",
  branch: "Kitwe City Square",
  sortCode: "020209",
  swift: "BARCZMLX",
};

/** Verified MTN Mobile Money details (Zambia). */
export const mobileMoney = {
  provider: "MTN Mobile Money",
  accountName: "Lusean Child's Trust",
  number: "+260 963 423 836",
};

/**
 * Donation channels are verified. No online payment gateway is connected yet,
 * so the website never simulates or confirms a payment.
 */
export const donation = {
  verified: true,
  headline: "Give Hope. Create Change. Transform a Child's Future.",
  intro:
    "Every contribution helps Lusean Child's Trust Foundation continue its humanitarian work supporting vulnerable and marginalized children, schools and communities. Whether you give a little or a lot, your contribution becomes part of our mission of Changing and Giving Hope to a Child.",
  methods: [] as { label: string; detail: string }[],
  placeholder:
    "Our official donation channel is currently being finalised. No payments are being collected through this website yet — please check back shortly, or reach out through the Contact page once our verified contact details are published.",
};


/* -------------------------------------------------------------- Involvement */

export const involvement = [
  {
    title: "Donate",
    description:
      "Support education resources, school essentials, feeding and school development for vulnerable children in Kitwe.",
    action: "Support our work",
    to: "/donate",
  },
  {
    title: "Sponsor a School Project",
    description:
      "Fund a defined intervention at a supported school — learning materials, school essentials, feeding or sanitation infrastructure.",
    action: "Sponsor a project",
    to: "/projects",
  },
  {
    title: "Partner With Us",
    description:
      "Corporate, foundation, government, faith and institutional partnerships that extend our reach and share expertise.",
    action: "Become a partner",
    to: "/partners",
  },
  {
    title: "Volunteer",
    description:
      "Give your time and skills — outreach days, distributions, teaching support, communications and events.",
    action: "Join as a volunteer",
    to: "/get-involved",
  },
] as const;

export const values = [
  { title: "Hope", body: "We believe every child's story can change." },
  { title: "Dignity", body: "We serve children with respect, never with pity." },
  { title: "Compassion", body: "We respond to real needs with practical care." },
  { title: "Accountability", body: "We report honestly on every contribution and every outcome." },
] as const;

/**
 * Messages From Our Leadership.
 * Verified, approved leadership content — edit the paragraphs here.
 * Photographs are the official uploaded portraits; do not regenerate them.
 */
export type LeadershipMessage = {
  slug: string;
  name: string;
  role: string;
  eyebrow: string;
  photo: string;
  photoAlt: string;
  pullQuote: string;
  paragraphs: string[];
};

export const leadership: LeadershipMessage[] = [
  {
    slug: "founder",
    name: "Chaplain Sean Chirwa",
    role: "Founder & Executive Director",
    eyebrow: "Founder's Message",
    photo: founderPhoto.url,
    photoAlt: "Portrait of Chaplain Sean Chirwa, Founder and Executive Director",
    pullQuote:
      "Together, by God's grace, we can create a future where every child has the opportunity to learn, thrive, dream, and reach their full potential.",
    paragraphs: [
      "It is both an honor and a privilege to serve vulnerable children and communities through the work of Lusean Child's Trust Foundation, a faith-based (Christian) humanitarian organization committed to demonstrating the love and compassion of Christ through practical service to humanity.",
      "The Foundation was established in 2018 with a vision to support children who face significant social and economic challenges that limit their opportunities for education and a better future. While the vision began several years earlier, our humanitarian outreach programs officially commenced in June 2023, marking the beginning of our active engagement with communities.",
      "Our Christian faith is at the heart of who we are and inspires our commitment to serve with love, compassion, integrity, dignity, and respect. We believe that every child is precious and deserves the opportunity to learn, grow, dream, and reach their full potential. Our humanitarian service therefore seeks to extend hope and practical assistance to vulnerable and marginalized children and communities.",
      "Since launching our programs, we have been deeply encouraged by the resilience and hope we see among the children and families we serve. Many communities continue to face challenges related to poverty, lack of access to basic needs, and limited educational resources. Through our work, we strive to respond to these challenges with compassion, integrity, and practical solutions.",
      "The Foundation focuses on initiatives that directly impact the lives of children and communities. These include education support programs, school jersey and uniform distributions, food assistance, water access projects, and sanitation improvements in schools. Each of these efforts is designed to create a supportive environment where children can learn, grow, and pursue their dreams.",
      "Our approach is rooted in collaboration. We work closely with schools, community leaders, volunteers, partners, and other stakeholders who share our commitment to improving the lives of children. Together, we believe that even small acts of kindness can lead to meaningful and lasting change.",
      "Looking ahead, our goal is to expand the reach of Lusean Child's Trust Foundation so that more children and communities can benefit from our programs. We remain committed to transparency, accountability, responsible stewardship, and Christian service in the management of every resource entrusted to us.",
      "I would like to extend my sincere gratitude to all individuals, organizations, volunteers, and partners who support our mission. Your encouragement and contributions make it possible for us to continue bringing hope and practical assistance to those who need it most.",
      "Together, by God's grace, we can create a future where every child has the opportunity to learn, thrive, dream, and reach their full potential.",
    ],
  },
  {
    slug: "assistant-director",
    name: "Chaplain Luyando Sean",
    role: "Assistant Director",
    eyebrow: "Assistant Director's Message",
    photo: assistantDirectorPhoto.url,
    photoAlt: "Portrait of Chaplain Luyando Sean, Assistant Director",
    pullQuote:
      "Every child deserves to be seen, valued, protected, encouraged, and given an opportunity to succeed.",
    paragraphs: [
      "Every child deserves to be seen, valued, protected, encouraged, and given an opportunity to succeed.",
      "Serving as Assistant Director of Lusean Child's Trust Foundation gives me the privilege of witnessing both the challenges vulnerable children face and the extraordinary potential that exists within each one of them. Behind every child we meet is a story, a dream, and a future that deserves to be nurtured.",
      "At Lusean, we believe that a child's circumstances today should not determine the limits of their tomorrow.",
      "Education is one of the most powerful tools we can give a child. Yet for many vulnerable children, seemingly simple needs — such as textbooks, exercise books, school shoes, uniforms, backpacks, a nutritious meal, clean water, or a safe and dignified school environment — can become barriers to learning and participation.",
      "This is why our work goes beyond simply providing materials. We seek to restore dignity, strengthen confidence, create opportunity, and activate hope.",
      "When a child receives a pair of school shoes, we see more than shoes — we see a child able to walk into school with greater dignity and confidence. When we provide textbooks and learning materials, we see doors to knowledge opening. When children receive a meal, we see them better positioned to concentrate, learn, and participate. When we support clean water and sanitation in schools, we are helping create healthier and safer environments in which children can grow.",
      "Our commitment is also to the communities surrounding these children. Lasting transformation happens when families, schools, communities, volunteers, partners, and organizations work together with a shared purpose.",
      "As we look toward the future, my desire is to see Lusean Child's Trust Foundation reach even more vulnerable and marginalized children, helping them discover that their dreams matter and that their future is worth investing in.",
      "To every donor, partner, volunteer, teacher, community leader, parent, and friend of Lusean: thank you for standing with us. Every contribution, partnership, resource, and act of service helps us move closer to a future where no child is denied opportunity simply because of their circumstances.",
      "Together, we can build stronger foundations for tomorrow's leaders — one child, one school, and one community at a time.",
    ],
  },
];

/* ------------------------------------------------- Phase IV: Get Involved */

/** Get Involved page intro copy. */
export const getInvolvedIntro = {
  heading: "Get Involved",
  primaryMessage: "Be Part of Changing and Giving Hope to a Child.",
  body: [
    "Supporting vulnerable and marginalized children requires people, organizations and communities willing to turn compassion into practical action.",
    "Lusean Child's Trust Foundation welcomes appropriate involvement from individuals, churches, organizations, companies, professionals, volunteers and supporters who share a desire to create meaningful and sustainable change.",
  ],
};

export type ActionLink = { label: string; to?: string; hash?: string; href?: string };

/** Primary calls-to-action at the top of the Get Involved page. */
export const getInvolvedActions: ActionLink[] = [
  { label: "DONATE", to: "/donate" },
  { label: "PARTNER WITH US", to: "/partners" },
  { label: "VOLUNTEER", to: "/get-involved", hash: "volunteer" },
  { label: "SUPPORT A PROJECT", to: "/projects" },
];

/** Ways to make a difference cards. */
export const waysToMakeADifference: {
  title: string;
  description: string;
  action: ActionLink;
}[] = [
  {
    title: "Give",
    description:
      "Support Lusean's humanitarian programs through financial contributions.",
    action: { label: "DONATE", to: "/donate" },
  },
  {
    title: "Partner",
    description:
      "Work alongside Lusean through corporate, church, institutional, organizational, philanthropic or other appropriate partnerships.",
    action: { label: "PARTNER WITH US", to: "/partners" },
  },
  {
    title: "Volunteer",
    description:
      "Offer appropriate time, professional expertise, skills or service in support of Lusean's mission.",
    action: { label: "EXPLORE VOLUNTEERING", to: "/get-involved", hash: "volunteer" },
  },
  {
    title: "Support a Project",
    description:
      "Learn about verified Lusean school and community initiatives and identify areas where support may be helpful.",
    action: { label: "VIEW PROJECTS", to: "/projects" },
  },
  {
    title: "Share Our Mission",
    description:
      "Help increase awareness of Lusean Child's Trust Foundation and its humanitarian work among your family, church, workplace and networks.",
    action: { label: "SHARE THIS PAGE", to: "/get-involved", hash: "share" },
  },
];

/** Volunteer section. */
export const volunteerSection = {
  title: "Volunteer With Lusean",
  subtitle: "Use Your Time, Skills and Experience to Help Create Change.",
  areas: [
    "Community Outreach",
    "Education Support",
    "Child-Focused Humanitarian Initiatives",
    "Event Support",
    "Professional Skills",
    "Communications & Media",
    "Administration",
    "Training & Capacity Building",
    "Project Support",
    "Appropriate International Support",
  ],
  notice:
    "Volunteer opportunities depend upon current organizational needs, project requirements, safeguarding considerations and availability. Expressing interest does not guarantee a volunteer placement, employment, immigration or visa sponsorship, accommodation, transportation, reimbursement or financial compensation. Participation remains subject to organizational review and current needs.",
};

/** Options for the Volunteer Interest Form "Area of Interest" field. */
export const volunteerInterestAreas = [
  "Community Outreach",
  "Education Support",
  "Professional Skills",
  "Communications & Media",
  "Administration",
  "Training & Capacity Building",
  "Events",
  "Project Support",
  "Other",
];

export const volunteerFormNotice =
  "Submitting this form expresses interest only and does not guarantee a volunteer placement.";

/** Partner With Purpose section. */
export const partnerWithPurpose = {
  title: "Partner With Purpose",
  subtitle: "Together, We Can Create Sustainable Change.",
  intro: "Lusean welcomes appropriate collaboration with:",
  collaborators: partnerAudiences,
};

/** Churches & faith communities pathway. */
export const churchesSection = {
  title: "Churches Changing Lives Together",
  intro:
    "As a Christian faith-based humanitarian organization, Lusean welcomes appropriate collaboration with churches and Christian organizations through:",
  areas: [
    "Community outreach",
    "Education support",
    "Child-focused humanitarian assistance",
    "Resource mobilization",
    "Prayer and awareness",
    "Professional support",
    "Appropriate volunteer support",
  ],
  cta: "CONNECT WITH LUSEAN",
};

/** Corporate & CSR partnerships. */
export const corporateSection = {
  title: "Corporate & CSR Partnerships",
  intro:
    "Businesses and organizations may explore collaboration with Lusean around verified program areas. We are open to responsible, transparent and mission-aligned collaboration.",
  areas: [
    "Education",
    "School Essentials",
    "Feeding & Basic Needs",
    "Water & Sanitation",
    "School & Community Development",
    "Community Outreach",
  ],
  cta: "DISCUSS A PARTNERSHIP",
};

/** International engagement. */
export const supportFromAnywhere = {
  title: "Support From Anywhere",
  intro:
    "Individuals, churches, organizations and supporters outside Zambia can participate in Lusean's mission by:",
  ways: [
    "Learning about Lusean's work",
    "Sharing the mission",
    "Exploring partnership opportunities",
    "Providing appropriate professional support",
    "Supporting verified programs",
    "Donating through the existing international bank-transfer pathway",
  ],
};

/** Safeguarding / responsible engagement statement. */
export const responsibleEngagement = {
  title: "Responsible Engagement",
  body: "Lusean Child's Trust Foundation is committed to responsible, respectful and child-conscious humanitarian engagement. Volunteer and partnership participation may be subject to appropriate organizational review and safeguarding requirements.",
};

/** Closing call-to-action for the Get Involved experience. */
export const getInvolvedClosing = {
  title: "Your Action Can Help Create Hope.",
  lines: [
    "Supporting a child.",
    "Supporting a school.",
    "Serving a community.",
    "Sharing professional skills.",
    "Building a partnership.",
  ],
  body: "Every appropriate action can contribute to meaningful change.",
  actions: [
    { label: "DONATE", to: "/donate" },
    { label: "VOLUNTEER", to: "/get-involved", hash: "volunteer" },
    { label: "PARTNER WITH US", to: "/partners" },
    { label: "CONTACT LUSEAN", to: "/contact" },
  ] as ActionLink[],
};

/**
 * Privacy Policy content (approved by the Foundation).
 * Edit the sections below to update the /privacy page.
 */
export const privacyPolicy = {
  title: "Privacy Policy",
  intro:
    "Lusean Child's Trust Foundation respects the privacy of individuals who visit our website, contact the Foundation, express interest in volunteering, explore partnership opportunities, or otherwise communicate with us. We are committed to handling information shared with us responsibly, respectfully and only for legitimate organizational purposes.",
  sections: [
    {
      heading: "Information You May Provide to Us",
      paragraphs: [
        "Depending on how you interact with our website, you may voluntarily provide information such as:",
      ],
      list: [
        "Full name",
        "Email address",
        "Telephone or WhatsApp number",
        "Country",
        "City or location",
        "Volunteer interests",
        "Professional skills or experience",
        "Availability",
        "Partnership interests",
        "Information included in an enquiry or message",
        "Other information you voluntarily choose to provide",
      ],
      footnote:
        "Visitors should avoid submitting unnecessary sensitive personal information through general website enquiry forms or email.",
    },
    {
      heading: "How We May Use Information",
      paragraphs: ["Information voluntarily provided to the Foundation may be used to:"],
      list: [
        "Respond to enquiries.",
        "Communicate about volunteer interest.",
        "Discuss potential partnerships.",
        "Respond to donation-related enquiries.",
        "Provide information about our programs and activities.",
        "Coordinate appropriate organizational communication.",
        "Respond to requests for information or support.",
        "Maintain appropriate administrative records related to an enquiry or interaction.",
      ],
      footnote: "Personal information is used only for appropriate Foundation purposes.",
    },
    {
      heading: "Volunteer Information",
      paragraphs: [
        "Submitting a Volunteer Interest Form or contacting Lusean regarding volunteering expresses interest only. It does not guarantee:",
      ],
      list: [
        "Volunteer placement",
        "Employment",
        "Visa sponsorship",
        "Immigration sponsorship",
        "Accommodation",
        "Transportation",
        "Financial compensation",
        "Reimbursement",
      ],
      footnote:
        "Volunteer participation may be subject to organizational needs, availability, appropriate review and safeguarding considerations.",
    },
    {
      heading: "Children's Privacy & Safeguarding",
      paragraphs: [
        "Lusean Child's Trust Foundation works with children and vulnerable communities and recognizes the importance of responsible and respectful handling of information relating to children.",
        "Our website is intended primarily to provide information about the Foundation, its humanitarian work and appropriate opportunities to support its mission.",
        "Visitors should not submit private or sensitive information about a child through general website forms or email unless it is necessary and appropriate to do so.",
        "The Foundation seeks to present children and communities with dignity and respect in its public communications.",
      ],
    },
    {
      heading: "Donations & Financial Information",
      paragraphs: [
        "The website provides verified instructions for supporting Lusean Child's Trust Foundation through available donation methods.",
        "Where donations are completed through external banking, Mobile Money or other authorized financial services, those services may process information according to their own systems and privacy practices.",
        "This website does not process online payments and does not claim to do so.",
        "Visitors should never be asked through an ordinary website contact or volunteer form to submit sensitive banking credentials, passwords, PINs or similar security information.",
      ],
    },
    {
      heading: "Sharing of Information",
      paragraphs: [
        "Lusean Child's Trust Foundation does not sell personal information submitted through the website.",
        "Information may be accessed or shared when reasonably necessary for legitimate Foundation operations, responding to an individual's request, complying with applicable legal obligations, protecting safety, or working with service providers necessary to operate website or communication functions, such as hosting and email providers.",
      ],
    },
    {
      heading: "Website & Third-Party Services",
      paragraphs: [
        "The website may contain links to third-party services or websites, including social-media platforms, video services, banking services or other external resources. These external services operate according to their own terms and privacy practices.",
        "Lusean Child's Trust Foundation is not responsible for the privacy practices of independent third-party websites.",
      ],
    },
    {
      heading: "YouTube & Social Media",
      paragraphs: [
        "The website provides access to approved content from the Foundation's YouTube presence and links to its Facebook presence. Videos load only when a visitor chooses to play them.",
        "When visitors interact with third-party content, those platforms may process information according to their own privacy policies and technologies.",
      ],
    },
    {
      heading: "Cookies & Website Technologies",
      paragraphs: [
        "The website uses only essential technologies required for normal website operation.",
        "If analytics, advertising, tracking or other non-essential cookies are introduced in the future, the Foundation will review whether additional disclosure or consent mechanisms are required.",
      ],
    },
    {
      heading: "Information Security",
      paragraphs: [
        "Lusean Child's Trust Foundation seeks to handle information responsibly and take reasonable measures appropriate to its website and organizational operations.",
        "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      ],
    },
    {
      heading: "Information Retention",
      paragraphs: [
        "Information is retained only for as long as reasonably necessary for the purpose for which it was provided and for legitimate organizational or legal requirements.",
      ],
    },
    {
      heading: "Requests Concerning Your Information",
      paragraphs: [
        "Individuals who have contacted Lusean and have questions about personal information they previously provided may contact the Foundation using the details below.",
        "Requests are handled appropriately and subject to applicable requirements and the Foundation's ability to verify the requester.",
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      paragraphs: [
        "Lusean Child's Trust Foundation may update this Privacy Policy as its website, programs, communication systems or organizational practices develop. The latest version is made available through the website.",
      ],
    },
  ] as {
    heading: string;
    paragraphs?: string[];
    list?: string[];
    footnote?: string;
  }[],
};

/**
 * Domain readiness. Leave `baseUrl` empty until the Foundation's verified
 * custom domain is connected; canonical and Open Graph URLs stay relative and
 * resolve correctly on any host. Once the domain is confirmed, set it here
 * (e.g. "https://www.example.org", no trailing slash) and the sitemap will
 * emit absolute URLs automatically.
 */
export const siteConfig = {
  baseUrl: "",
};
