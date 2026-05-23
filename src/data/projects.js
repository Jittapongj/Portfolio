import FindmateImage from '../assets/images/projects/project-pic.png';
import CMSImage from '../assets/images/projects/news-dashboard.png';
import PortfolioImage from '../assets/images/projects/portfolio-pic.png';
// import FindmateStructure from '../assets/images/findmate-structure.png';
// import CMSStructure from '../assets/images/cms-structure.png';

export const projectData = [
  {
    id: 1,
    slug: "find-mate-roommate-recommendation",
    title: "Find Mate - Roommate Recommendation",
    description: "Roommate recommendation application using personality-based compatibility matching. Implemented a secure mutual match system with OTP verification and an admin dashboard for user and report management.",
    date: "18 May 2026", 
    image: FindmateImage,
    overview: "Roommate recommendation application leveraging personality-based compatibility algorithms to enhance user matching accuracy.",
    features: [
      "Implemented a secure mutual match system requiring OTP verification to ensure genuine connections.",
      "Designed and developed an admin dashboard for efficient user and report management.",
      "Integrated personality assessment tools to improve recommendation quality."
    ],
    gitUrl: "https://github.com/Jittapongj/Findmate-ProjectUniversal",
    tools: ["React", "MaterialUI", "Node.js", "Express", "MySQL", "OTP-based verification"],
    structure: null
  },
  {
    id: 2,
    slug: "cms-news-management-system",
    title: "CMS News Management System",
    description: "A Content Management System (CMS) for managing articles and news. It features a backend (Admin Panel) for adding, editing, and deleting news, along with a frontend system for displaying news to general users.",
    date: "18 May 2026",
    overview: "A comprehensive CMS for news management, featuring both a secure admin panel for content creation and a user-friendly frontend for public viewing.",
    features: [
      "Responsive Design",
      "High Performance",
      "Content Management System (Admin Panel)"
    ],
    image: CMSImage,
    gitUrl: "https://github.com/Jittapongj/CMS-News",
    tools: ["PHP", "MySQL", "HTML5", "SCSS", "jQuery", "Bootstrap"],
    structure: null
  },
  {
    id: 3,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A portfolio website built with React and Tailwind CSS, featuring a clean design, fast load times, and full responsiveness across all devices.",
    date: "18 May 2026", 
    image: PortfolioImage,
    overview: "Created a Portfolio Website using React + Tailwind + SCSS, focusing on high performance and responsive design.",
    features: [
      "Responsive Design",
      "High Performance",
      "Content Management via Data Files"
    ],
    gitUrl: "https://github.com/Jittapongj/Portfolio",
    tools: ["React", "Tailwind CSS", "SCSS"],
    structure: `src/
├── assets/                 # Media assets (images, icons, fonts)
├── components/             # Reusable React components
│   ├── ui/                 # Small UI pieces (Card, Button, Post, Skill)
│   ├── Nav.jsx             # Main navigation bar
│   └── Footer.jsx          # Website footer
├── data/                   # Static mock data & configurations
├── pages/                  # Main route components (Home, About, Projects)
├── styles/                 # Global styling and SCSS architecture
│   └── ui/                 # Specific styles for each UI component
├── App.jsx                 # Root component and Router configuration
└── main.jsx                # Application entry point`
  }
];