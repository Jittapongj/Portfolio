import FindmateImage from '../assets/images/projects/project-pic.png';
import CMSImage from '../assets/images/projects/news-dashboard.png';
import PortfolioImage from '../assets/images/projects/portfolio-pic.png';
// import FindmateStructure from '../assets/images/findmate-structure.png';
// import CMSStructure from '../assets/images/cms-structure.png';

export const projectData = [
  {
    id: 1,
    slug: "Mock Data: Find Mate - Roomate Recommendation",
    title: "Find Mate - Roommate Recommendation",
    description: "Roommate recommendation application using personality-based compatibility matching. Implemented a secure mutual match system with OTP verification and an admin dashboard for user and report management.",
    date: "18 May 2026", // สามารถเปลี่ยนเป็นวันที่จริงได้
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
    description: "ระบบ Content Management System (CMS) สำหรับจัดการบทความและข่าวสาร มีระบบหลังบ้าน (Admin Panel) สำหรับเพิ่ม ลบ แก้ไข ข่าวสาร และระบบหน้าบ้านสำหรับแสดงผลข่าวสารให้ผู้ใช้งานทั่วไป",
    date: "18 May 2026",
    overview: "ระบบ Content Management System (CMS) สำหรับจัดการบทความและข่าวสาร มีระบบหลังบ้าน (Admin Panel) สำหรับเพิ่ม ลบ แก้ไข ข่าวสาร และระบบหน้าบ้านสำหรับแสดงผลข่าวสารให้ผู้ใช้งานทั่วไป",
    features: [
      "Responsive Design",
      "High Performance",
      "Content Management via Data Files"
    ],
    image: CMSImage,
    gitUrl: "https://github.com/Jittapongj/CMS-News",
    tools: ["PHP", "MySQL", "HTML5", "SCSS", "jQuery", "Bootstrap"],
    structure: null
  },
  {
    id: 3,
    slug: "Portfolio-Website",
    title: "Portfolio Website",
    description: "เว็บไซต์ Portfolio พัฒนาด้วย React และ Tailwind CSS เน้นการออกแบบที่เรียบง่าย โหลดเร็ว และรองรับการแสดงผลทุกหน้าจอ (Responsive Design)",
    date: "18 May 2026", // สามารถเปลี่ยนเป็นวันที่จริงได้
    image: PortfolioImage,
    overview: "Create Portfolio Website using React + Tailwind + SCSS with high performance and responsive",
    features: [
      "Responsive Design",
      "High Performance",
      "Content Management via Data Files"
    ],
    gitUrl: "https://github.com/Jittapongj/Portfolio",
    tools: ["React", "Tailwind CSS", "SCSS"],
    structure: `src/
├── assets/                 # ทรัพยากรที่ใช้ในโปรเจกต์
│   └── images/             # รูปภาพโปรไฟล์และรูปภาพประกอบทั่วไป
├── components/             # ส่วนประกอบของ UI ที่นำกลับมาใช้ใหม่ได้
│   ├── ui/                 # Small Components (Card, Post, Skills, Button)
│   ├── Nav.jsx             # แถบเมนูนำทางหลัก
│   └── Footer.jsx          # ส่วนท้ายของเว็บไซต์
├── data/                   # ไฟล์ JSON/JS สำหรับจัดการเนื้อหา (Content Management)
├── pages/                  # ส่วนแสดงผลหลักของแต่ละหน้า
├── styles/                 # การจัดการสไตล์ทั้งหมดด้วย SCSS และ Tailwind
│   └── ui/                 # สไตล์เฉพาะของแต่ละ UI Component
├── App.jsx                 # ไฟล์หลักที่รวม Layout และ Logic เริ่มต้น
└── main.jsx                # จุดเชื่อมต่อ React เข้ากับ HTML DOM`
  }
];