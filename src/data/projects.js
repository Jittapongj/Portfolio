import FindmateImage from '../assets/images/project-pic.png';
import CMSImage from '../assets/images/news-dashboard.png';
import PortfolioImage from '../assets/images/portfolio-pic.png';
// import FindmateStructure from '../assets/images/findmate-structure.png';
// import CMSStructure from '../assets/images/cms-structure.png';

export const projectData = [
  {
    id: 1,
    title: "Web Application Roommate Finder with K-NN",
    description: "โปรเจกต์นี้เป็น Web Application ที่ช่วยให้นักศึกษาสามารถค้นหาเพื่อนร่วมหอพักที่มีไลฟ์สไตล์ตรงกัน โดยนำอัลกอริทึม K-Nearest Neighbors (K-NN) มาช่วยในการจับคู่ (Matching) จากแบบสอบถามความสนใจและพฤติกรรมการใช้ชีวิต",
    image: FindmateImage,
    gitUrl: "https://github.com/Jittapongj/Findmate-ProjectUniversal",
    tools: ["React", "Node.js", "Express", "MongoDB", "Python (K-NN)"],
    structure: null
  },
  {
    id: 2,
    title: "CMS News Management System",
    description: "ระบบ Content Management System (CMS) สำหรับจัดการบทความและข่าวสาร มีระบบหลังบ้าน (Admin Panel) สำหรับเพิ่ม ลบ แก้ไข ข่าวสาร และระบบหน้าบ้านสำหรับแสดงผลข่าวสารให้ผู้ใช้งานทั่วไป",
    image: CMSImage,
    gitUrl: "https://github.com/Jittapongj/CMS-News",
    tools: ["PHP", "MySQL", "HTML5", "SCSS", "jQuery", "Bootstrap"],
    structure: null
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "เว็บไซต์ Portfolio พัฒนาด้วย React และ Tailwind CSS เน้นการออกแบบที่เรียบง่าย โหลดเร็ว และรองรับการแสดงผลทุกหน้าจอ (Responsive Design)",
    image: PortfolioImage,
    gitUrl: "https://github.com/Jittapongj/Portfolio",
    tools: ["React", "Vite", "Tailwind CSS", "SCSS"],
    structure: null
  }
];