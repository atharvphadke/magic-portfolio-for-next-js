const person = {
  firstName: "Atharv",
  lastName: "Phadke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graphic Designer | Branding & Packaging Specialist | Photographer",
  avatar: "/images/avatar.jpg",
  email: "meghanadphadke@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Marathi", "Hindi", "English", "Japanese (Beginner)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share branding, packaging, and visual storytelling insights from my design practice.
    </>
  ),
};

const social = [
  {
    name: "Behance",
    icon: "openLink",
    link: "https://www.behance.net/atharvphadke",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing memorable brands and packaging experiences</>,
  featured: {
    display: false,
    title: <>Recent project</>,
    href: "/work",
  },
  subline: (
    <>
      I'm Atharv, a graphic designer focused on branding, packaging, and communication design.
      <br /> I create visual systems that help brands connect with people.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  resume: {
    display: true,
    label: "Download Resume",
    href: "/resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Creative and detail-oriented graphic designer skilled in strategic visual communication,
        branding, packaging, and digital design for Indian and international clients. Passionate
        about crafting visuals that connect emotionally and communicate brand stories effectively.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Jnanaprabodhini (GyanSetu)",
        timeframe: "May 2021 – Aug 2021",
        role: "Graphic Design Intern",
        achievements: [
          <>Designed educational visuals, banners, and e-learning materials.</>,
          <>Contributed to print layout and storytelling for student modules.</>,
        ],
        images: [],
      },
      {
        company: "S.N. Arts",
        timeframe: "May 2022 – Apr 2023",
        role: "Graphic Designer",
        achievements: [
          <>Created promotional artwork, posters, and social-media content for regional brands.</>,
          <>Worked on illustration-based concepts blending traditional and digital art.</>,
          <>Assisted in client briefs, color planning, and final artwork production.</>,
        ],
        images: [],
      },
      {
        company: "Addnectar Solutions Pvt. Ltd.",
        timeframe: "Jun 2023 – Nov 2024",
        role: "Graphic Designer",
        achievements: [
          <>Developed brand identities, packaging, and campaign visuals for international clients.</>,
          <>Designed digital and print collateral aligned with marketing strategies.</>,
          <>Collaborated with cross-functional teams to ensure visual consistency.</>,
        ],
        images: [],
      },
      {
        company: "Office Beacon LLC",
        timeframe: "Nov 2024 – Apr 2025",
        role: "Graphic Designer",
        achievements: [
          <>Designed logos, mock-ups, and branding assets for U.S. clients.</>,
          <>Created product packaging and promotional visuals for multiple industries.</>,
          <>Delivered brand guidelines and marketing creatives for print and digital media.</>,
        ],
        images: [],
      },
      {
        company: "Swiftin Solutions LLP",
        timeframe: "Nov 2025 – Present",
        role: "Graphic Designer",
        achievements: [
          <>Designed logos, mock-ups, and branding assets for product promotions.</>,
          <>Created product packaging, catalogues, and brochures as per requirements.</>,
          <>Delivered brand guidelines and marketing creatives for print and digital media.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Yashwantrao Chavan Maharashtra Open University",
        description: <>Bachelor of Design (BSc in Animation), 2017 – 2020.</>,
      },
      {
        name: "MIT School of Photography",
        description: <>Certificate in Photography, 2015 – 2016.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Design",
        description: <>Photoshop, Illustrator, InDesign, CorelDRAW, Canva.</>,
        images: [],
      },
      {
        title: "Motion & Video",
        description: <>After Effects, Premiere Pro.</>,
        images: [],
      },
      {
        title: "UI/UX",
        description: <>Figma, Adobe XD.</>,
        images: [],
      },
      {
        title: "3D Design",
        description: <>3ds Max.</>,
        images: [],
      },
      {
        title: "Technical",
        description: <>HTML, CSS, Java.</>,
        images: [],
      },
      {
        title: "Extra Curricular",
        description: <>Flute and harmonium (Madhyama Pratham certified), COVID care volunteering, and AI foundations coursework (Outskill, Guvi, HCL, Clappingo).</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Design notes, branding stories, and creative process",
  description: `Updates and thoughts from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Branding, packaging, and visual design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
