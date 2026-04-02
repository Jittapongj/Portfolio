import '../styles/about.scss'

// สร้าง Component ย่อยเพื่อลดการเขียนโค้ดซ้ำ
const ResumeSection = ({ title, children }) => (
    <div className="section-resume mb-5">
        <div className="row lg:flex lg:justify-between items-start">
            <div className="label-box mb-4">
                <h2 className="h4 fw-bold">{title}</h2>
            </div>
            <div className="content-box col-md-9 flex flex-col">
                {children}
            </div>
        </div>
    </div>
);

const ResumeItem = ({ date, title, details, list = [] }) => (
    <div className="item flex items-start col-12 mb-5">
        <div className="item-date col-3" style={{ minWidth: '120px' }}>{date}</div>
        <div className="item-text col-9">
            <p className="item-title fw-bold">{title}</p>
            {details && <p className="item-details mb-1 text-muted">{details}</p>}
            {list.length > 0 && (
                <ul className="mt-2">
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            )}
        </div>
    </div>
);

function About() {
    const educationData = [
        {
            date: "2022 - 2025",
            title: "Bachelor of Engineering",
            details: "Computer Engineering | RMUTL Chiang Mai (GPA: 3.34)"
        },
        {
            date: "2020 - 2021",
            title: "High Vocational Certificate 1–2",
            details: "Electrical Control | Lampang Technical College (GPA: 3.91)"
        }
    ];

    const experienceData = [
        {
            date: "2025",
            title: "ClickNext",
            details: "Front-end Developer Internship",
            list: [
                "Developed functional CMS themes by translating design mockups into precise, structured web layouts.",
                "Use SCSS, Bootstrap, JavaScript, and jQuery to create interactive components and integrate AJAX.",
                "Prioritized Responsive Design principles for a seamless user experience across all devices."
            ]
        },
        {
            date: "2020 - 2021",
            title: "MT Electric",
            details: "Electrician Assistant",
            list: [
                "Installed electrical systems in residential and commercial buildings.",
                "Worked collaboratively and met project deadlines with high responsibility.",
                "Adapted to changing environments and diverse working conditions."
            ]
        }
    ];

    return (
        <section id='about' className="content-resume container py-5">
            <h1 className='flex justify-center'>Resume</h1>

            <ResumeSection title="Education">
                {educationData.map((edu, index) => (
                    <ResumeItem key={index} {...edu} />
                ))}
            </ResumeSection>

            <ResumeSection title="Work Experience">
                {experienceData.map((exp, index) => (
                    <ResumeItem key={index} {...exp} />
                ))}
            </ResumeSection>

            <ResumeSection title="Skills">
                <div className="row">
                    <div className="col-md-6">
                        <p className="item-title fw-bold">Hard Skills</p>
                        <p className="text-details">React, HTML, SCSS, PHP, JavaScript, jQuery, AJAX, MySQL, GitHub</p>
                    </div>
                    <div className="col-md-6">
                        <p className="item-title fw-bold">Soft Skills</p>
                        <p className="text-details">System Analysis, Collaboration, Creativity</p>
                    </div>
                </div>
            </ResumeSection>
        </section>
    );
}

export default About;