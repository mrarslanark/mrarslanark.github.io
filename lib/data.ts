export const personalInfo = {
  name: "Arslan Mushtaq",
  title: "Senior / Lead React Native Engineer",
  tagline: "I architect and scale mobile platforms that ship to millions.",
  summary:
    "I architect and scale React Native platforms in regulated industries like fintech and health-tech with a track record of eliminating manual QA dependency (100% → 20%), slashing build times by 85%, and shipping products used by 1M+ users. I specialise in server-driven UI, micro-frontend architecture (Re.pack), and building the CI/CD and observability infrastructure that keeps production stable at scale.",
  location: "Pakistan (Remote-Ready)",
  email: "m.arslanmushtaqahmed@gmail.com",
  linkedin: "https://linkedin.com/in/mrarslanark",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "1M+", label: "Active Users" },
    { value: "85%", label: "Build Time Reduced" },
    { value: "80%", label: "QA Automation" },
  ],
};

export const projects = {
  personal: [
    {
      title: "PulseBoard",
      description:
        "Built PulseBoard — an open-source mobile observability platform featuring crash analytics, real-time WebSocket event streaming, AI-powered insights via Anthropic/OpenAI/Google/Moonshot, and a React Native SDK. Self-hostable backend on Railway, web dashboard on Vercel.",
      tags: [
        "Next.js",
        "React Native",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Redis",
        "Railway",
        "BullMQ",
      ],
      url: "https://pulseboard-omega-ruddy.vercel.app",
      type: "Product",
      status: "Live",
    },
    {
      title: "KMIH 88.9 Radio",
      description:
        "A student-operated radio station at Mercer Island High School, featuring a web application developed with Bolt.new and an iOS-exclusive mobile app built using React Native.",
      tags: [
        "React Native CLI",
        "React Navigation",
        "Axios",
        "Spotify Web API",
        "React Query",
        "Firebase",
      ],
      url: "https://apps.apple.com/us/app/kmih-88-9/id6755164132",
      type: "Mobile App",
      status: "Live",
    },
    {
      title: "Loan Manager v2.0",
      description:
        "Loan Manager, a mobile-first product focused on bringing structure and reliability to informal personal lending. Millions of people lend and borrow money within their personal networks without proper tracking, instalment visibility, or accountability systems. Over time, this lack of structure creates missed repayments, unclear expectations, and strained relationships.",
      tags: ["React Native", "Java Spring Boot", "Redis", "PostgreSQL"],
      url: "https://play.google.com/store/apps/details?id=arslan.appclub.loanmanager",
      type: "Product",
      status: "Live",
    },
    {
      title: "Sayaraat",
      description:
        "Sayaraat is a comprehensive vehicle-focused marketplace designed for buying, selling, renting, and modifying vehicles of all kinds. The platform is exclusively dedicated to vehicles, ranging from everyday cars and motorcycles to specialized machinery such as dump trucks and even recreational vehicles like go-karts.",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
    {
      title: "You Can Do It",
      description:
        "You Can Do It is a platform designed to help parents manage and support their children through a gamified approach to daily development and behavior. The platform analyzes behavioral patterns over time to provide meaningful insights, enabling parents to better understand their children and guide them through everyday tasks more effectively.",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
    {
      title: "Snooki",
      description:
        "A gamified digital platform for snooker clubs that allows club owners to register their venues and manage players digitally. Players maintain personal snooker profiles based on recorded match results, performance history, and winning streaks.",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
    {
      title: "IntraExchange",
      description:
        "IntraExChange allows employers to shift employees to other companies by a single click. It is a perk that can be offered to an employee so it is easy for a company not to fire and leave them stranded and put a negative effect on the company’s reputation or the employees. Companies can integrate IntraExchange to understand how an employee is judged based on his work either working remotely or on-site.",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
    {
      title: "YumAte",
      description:
        "YumAte is a community-funded recipe marketplace where culinary creators turn original recipes into monetized digital assets. Instead of selling recipes individually, creators publish premium recipes using a collective unlock model, where users contribute small fees toward a funding goal; once reached, the recipe becomes permanently available to all contributors. The platform also supports recipe remixing with attribution and royalty sharing, creating a sustainable ecosystem for collaborative culinary innovation. ",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
    {
      title: "YumAte",
      description:
        "Voyesta is a unified travel and event management platform that enables users to plan personalized trips, discover destinations, purchase tickets, and organize complete itineraries in one place. The platform also empowers event organizers and tour guides with tools to create, manage, and promote events, handle venues, and manage ticketing and attendee engagement through an integrated dashboard. By combining travel discovery with streamlined event management, Voyesta delivers a seamless experience for both explorers and organizers.",
      tags: ["React Native"],
      url: "#",
      type: "Product",
      status: "Development",
    },
  ],
  professional: [
    {
      id: "fundix",
      title: "Fundix.pro",
      subtitle: "Prop Trading Application",
      build_at: "Amega",
      description:
        "I led the architecture of the application using React Native alongside a small engineering team, establishing the foundational codebase structure, implementing complex business logic, and integrating third-party services. I managed two developers—mentoring a junior engineer to mid-level and oversaw performance optimization, scalability, and overall code quality.",
      contribution: [
        "Build the initial documentation for system design",
        "Managed the organization of the codebase by applying principles like SOLID, DRY, OOP, and KISS pattern.",
        "Implemented CI/CD for linting, unit test coverage check, and check for documentation",
        "Implemented CIC/CD for E2E with GitHub Actions and BrowserStack for fullfilling business requirements",
        "Managed performance through profiling, scanning the bundle and apply necessary solutions like lazy loading, code splitting",
        "Made usage of Agents to enhance productivity across the team and myself",
        "Cross collaborated with backend team along with UI/UX designers for handoff designs",
        "Mentored junior and senior developers through tough decision and point of disturbance",
      ],
      tags: [
        "React Native",
        "Next.js",
        "React Query",
        "React Navigation API",
        "Zustand",
        "WebSockets",
        "Strapi",
        "GitHub Actions",
        "Fastlane",
      ],
      urls: "#",
      type: "Mobile App",
      status: "Archived",
    },
  ],
};

export const skills = {
  Mobile: [
    "React Native CLI",
    "React Native Expo",
    "Micro-Frontend Architecture (Re.pack)",
    "Server-Driven UI",
    "Redux Toolkit",
    "Redux Saga",
    "Redux Thunk",
    "Zustand",
    "WebSockets",
    "REST APIs",
    "GraphQL",
    "iOS Optimisation",
    "Android Optimisation",
  ],
  "CI/CD & Release": [
    "GitHub Actions",
    "Fastlane",
    "Bitrise",
    "CircleCI",
    "Multi-Environment Pipelines",
    "Automated Quality Gates",
  ],
  "Quality & Observability": [
    "Appium",
    "WebDriverIO",
    "Detox",
    "Jest",
    "RNTL",
    "Dynatrace",
    "Sentry",
    "MixPanel",
    "Luciq",
  ],
  "CMS / Analytics": [
    "Strapi",
    "Directus",
    "WordPress",
    "Customer.io",
    "Intercom",
    "Looker Studio",
    "Firebase Analytics",
    "Crashlytics",
    "Datadog",
    "Grafana",
  ],
};

export const experience = [
  {
    title: "Lead React Native Engineer",
    company: "Amega",
    location: "Cyprus (Remote)",
    period: "Jun 2024 – Nov 2025",
    type: "Lead",
    description:
      "Sole architect and founding engineer for 3 React Native applications built from scratch. Owning the full stack from architecture and foundation to CI/CD, release governance, and team delivery.",
    achievements: [
      "Architected zero-touch deployment pipelines across 4 environments using GitHub Actions and Fastlane; reduced build times from ~2 hrs to under 18 min (85% reduction).",
      "Eliminated 80% of manual QA dependency by building multi-tiered test infrastructure: Unit → API → Functional → E2E (BrowserStack / Appium / WebDriverIO).",
      "Engineered automated data pipelines into headless CMS platforms (Strapi, Directus); integrated full analytics stack enabling real-time customer behavioural data.",
      "Directed client-side optimisations including bundle payload analysis and memory-efficient rendering; implemented custom Google Cloud CDN.",
      "Standardised Zustand state management, WebSocket data flows, code review protocols, and PR quality gates across a 7-person distributed team.",
    ],
  },
  {
    title: "Senior React Native Engineer",
    company: "Novos",
    location: "United States (Remote)",
    period: "Apr 2023 – Jun 2024",
    type: "Senior",
    description:
      "Sole mobile architect for a greenfield React Native application for a health-tech platform serving 1M+ active users.",
    achievements: [
      "Architected a multi-conditional questionnaire engine (Redux Toolkit) with complex state dependencies across 50+ question branches.",
      "Designed a Server-Driven UI system ingesting dynamic form configurations from WordPress, enabling zero-engineering-intervention updates.",
      "Established automated testing culture from zero: Unit (Jest), Functional (RNTL), and E2E (Detox) — reducing production crash rate significantly.",
      "Optimised mobile acquisition funnels contributing to 30% increase in platform traffic and 15% growth in e-commerce revenue.",
    ],
  },
  {
    title: "Senior React Native Engineer",
    company: "S4 Digital → Proximus",
    location: "Pakistan (Hybrid)",
    period: "Oct 2021 – Mar 2023",
    type: "Senior",
    description:
      "Deployed to Proximus (Belgium's largest telecom) to engineer and maintain high-scale mobile solutions within a large distributed engineering organisation.",
    achievements: [
      "Developed scalable features in the Network module using Re.pack micro-frontend architecture with federated modules and a shared enterprise UI library.",
      "Grew E2E test coverage from 45% to 96% using Appium and WebDriverIO — eliminating an entire class of regression bugs before production.",
      "Managed complex async state flows (Redux Saga/Thunk) and integrated Dynatrace and Instabug for platform stability at telecom scale.",
    ],
  },
  {
    title: "Associate React Native Engineer",
    company: "Ecologix",
    location: "Pakistan (On-site)",
    period: "Sep 2020 – Aug 2021",
    type: "Associate",
    description:
      "Led engineering delivery for high-traffic mobile applications, coordinating across a 12-person cross-functional team.",
    achievements: [
      "Implemented standardised development workflows, code review protocols, and deployment practices that stabilised production environments.",
      "Mentored 8–12 developers, with several junior engineers successfully promoted to mid-level roles.",
    ],
  },
  {
    title: "React Native Engineer",
    company: "Juice Phactree",
    location: "Canada (Remote)",
    period: "Sep 2015 – Aug 2020",
    type: "Engineer",
    description:
      "Founding mobile engineer, built the company's internal React Native mobile applications from scratch, owning the architecture and full mobile ecosystem.",
    achievements: [
      "Architected internal React Native apps from scratch for inventory management, sales operations, and financial tracking.",
      "Engineered a custom native Android (Java) application integrated with handheld hardware scanners for real-time inventory logging.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Minhaj University Lahore",
    location: "Lahore, Pakistan",
    period: "2015 – 2019",
    achievements: [
      "President — Application Development Club: Founded the club to expose students to industry-standard product development. Organised bootcamps, hackathons, and seminars.",
      "Winner at Softec'19: Built a Netflix-like mobile app in 28 hours at FAST-NU competition using Kotlin/Android, securing 1st prize and PKR 50,000.",
      "Worked ~4–6 hours/day at Juice Phactree while studying full-time, self-financing education through professional salary.",
    ],
  },
  {
    degree: "Intermediate of Computer Science",
    institution: "Sheikh Khalifa Bin Zayed Arab Pakistani College",
    location: "Abu Dhabi, U.A.E",
    period: "2011 – 2013",
    achievements: [],
  },
];

export const certifications = [
  { title: "Learn Intermediate Python 3", issuer: "Codecademy" },
  { title: "Learn Python 3", issuer: "Codecademy" },
  { title: "Learn React.js", issuer: "Codecademy" },
  { title: "Learn Java", issuer: "Codecademy" },
  { title: "Learn SQL", issuer: "Codecademy" },
  { title: "Meta iOS Development", issuer: "Coursera" },
  { title: "Meta Android Development", issuer: "Coursera" },
  { title: "100+ Certifications", issuer: "LinkedIn Learning" },
];

export const volunteering = [
  {
    title: "Guest Speaker — Google I/O Extended 2019",
    description:
      'Presented "Introduction to Kotlin" at LUMS, covering Kotlin fundamentals and its advantages over Java in Android development. Organised by GDG Lahore.',
  },
  {
    title: "Speaker — Tech Tology Lahore Chapter Launch",
    description:
      "Presented on the enjoyable aspects of constructing Android applications, demystifying Android development for attendees.",
  },
];
