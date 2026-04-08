# 💻 Jittadev - Personal Portfolio

**Jittadev** คือเว็บไซต์พอร์ตโฟลิโอส่วนตัวที่สร้างขึ้นเพื่อนำเสนอตัวตน ทักษะ และผลงานในฐานะ **Front-end Developer** โดยเน้นการออกแบบที่ทันสมัย (Modern UI), ความเร็วในการใช้งาน และการรองรับการแสดงผลทุกหน้าจอ (Responsive Design)

---

## 🚀 Features

* **Dynamic Navigation:** ระบบ Single Page Application (SPA) ที่จัดการผ่าน `MainLayout` ให้การสลับหน้าเป็นไปอย่างลื่นไหล
* **Project Showcase:** ส่วนแสดงผลงานที่ดึงข้อมูลจากไฟล์ `data/projects.js` มาสร้างเป็น Card และ Post อัตโนมัติ
* **Skills Interactive UI:** ส่วนแสดงทักษะความสามารถ (Skills Section) พร้อม Icon และเอฟเฟกต์ตอบสนองต่อการ Hover
* **Responsive Design:** ออกแบบด้วยแนวคิด Mobile-First รองรับการแสดงผลตั้งแต่สมาร์ทโฟนไปจนถึงจอเดสก์ท็อป
* **Centralized Data:** จัดเก็บข้อมูลโปรเจกต์และช่องทางการติดต่อไว้ที่ส่วนกลาง เพื่อให้ง่ายต่อการอัปเดตข้อมูลในอนาคต

## 🛠 Tech Stack

โปรเจกต์นี้เลือกใช้เทคโนโลยีล่าสุดเพื่อให้ได้ประสิทธิภาพและโครงสร้างโค้ดที่ดี:

* **Core:** [React 19](https://react.dev/)
* **Build Tool:** [Vite 8](https://vitejs.dev/)
* **Styling:** * [Tailwind CSS v4](https://tailwindcss.com/) - ใช้สำหรับจัดการ Layout และ Positioning
    * [SCSS](https://sass-lang.com/) - ใช้จัดการงานดีไซน์ที่ละเอียด (Colors, Effects, Mixins) แบบ Modular
* **Icons:** Custom SVG & FontAwesome
* **Font:** Roboto (Google Fonts)

## 📂 Project Structure

โครงสร้างโปรเจกต์ถูกจัดระเบียบให้มีความเป็นระเบียบและง่ายต่อการขยายผล (Scalability):

```text
src/
├── assets/                 # ทรัพยากรที่ใช้ในโปรเจกต์
│   ├── images/             # รูปภาพโปรไฟล์และรูปภาพประกอบทั่วไป
│   │   ├── contacts/       # ไอคอนช่องทางการติดต่อ (SVG)
│   │   ├── projects/       # รูปภาพหน้าปกโปรเจกต์ต่างๆ
│   │   └── skills/         # ไอคอนเทคโนโลยีและเครื่องมือ (SVG)
├── components/             # ส่วนประกอบของ UI ที่นำกลับมาใช้ใหม่ได้
│   ├── ui/                 # Small Components (Card, Post, Skills, Button)
│   ├── Nav.jsx             # แถบเมนูนำทางหลัก
│   └── Footer.jsx          # ส่วนท้ายของเว็บไซต์
├── data/                   # ไฟล์ JSON/JS สำหรับจัดการเนื้อหา (Content Management)
│   ├── contact.js          # ข้อมูล Link โซเชียลและข้อมูลการติดต่อ
│   ├── projects.js         # รายละเอียดโปรเจกต์ (ชื่อ, รายละเอียด, รูปภาพ, Stack)
│   └── skills.js           # รายชื่อทักษะและ Icon Path สำหรับส่วน UI Skills
├── layout/                 # ส่วนควบคุมโครงสร้างหน้าตาหลัก
│   └── MainLayout.jsx      # จัดการ State การเปลี่ยนหน้า (Home, About, Project, Contact)
├── pages/                  # ส่วนแสดงผลหลักของแต่ละหน้า
│   ├── home.jsx            # หน้าแรกและการแนะนำตัวเบื้องต้น
│   ├── about.jsx           # ประวัติการศึกษา ประวัติการทำงาน และทักษะ
│   ├── project.jsx         # หน้ารวมผลงานทั้งหมด
│   └── contact.jsx         # หน้าช่องทางการติดต่อ
├── styles/                 # การจัดการสไตล์ทั้งหมดด้วย SCSS และ Tailwind
│   ├── ui/                 # สไตล์เฉพาะของแต่ละ UI Component
│   ├── _variables.scss     # ไฟล์เก็บค่าตัวแปรกลาง (Colors, Fonts, Sizes)
│   ├── _mixins.scss        # ฟังก์ชันอำนวยความสะดวกสำหรับ SCSS (Responsive, Flex)
│   ├── main.scss           # จุดรวมของไฟล์สไตล์ทั้งหมด
│   └── tailwind.css        # ไฟล์คอนฟิกพื้นฐานของ Tailwind CSS
├── App.jsx                 # ไฟล์หลักที่รวม Layout และ Logic เริ่มต้น
└── main.jsx                # จุดเชื่อมต่อ React เข้ากับ HTML DOM
