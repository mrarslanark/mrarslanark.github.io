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
