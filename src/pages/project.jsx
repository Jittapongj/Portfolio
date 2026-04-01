import projectPic from '../assets/images/project-pic.png'
import newsDashboard from '../assets/images/news-dashboard.png'

function Project() {
    return (
        <section class="section items-center">
            <div class="box flex justify-between flex-wrap">
                <div class="box-content">
                    <div class="box-title">Web Application Roommate Finder with K-NN</div>
                    <div class="box-details">University Project</div>
                    <ul>
                        <li>Recommendation algorithm using K-NN based on personality traits.</li>
                        <li>Frontend built with React + Material UI for clean UX/UI.</li>
                        <li>Node.js for backend API integration, and MySQL as the database.</li>
                    </ul>
                </div>
                <div class="project-image flex justifycenter items-center">
                    <img src={projectPic} alt="Roommate Finder Project" />
                </div>
            </div>
            <div class="box flex justifybetween flex-wrap">
                <div class="box-content">
                    <div class="box-title">CMS News Management System</div>
                    <div class="box-details">Intern Project</div>
                    <ul>
                        <li>Developed using PHP with MySQL database management via PDO for enhanced security.</li>
                        <li>Utilizes HTML5 and SCSS for modern web structural design and clean, maintainable styling.
                        </li>
                        <li>Implements jQuery (AJAX) to facilitate seamless data exchange between the web interface and
                            the API.</li>
                        <li>Features a secure Member Registration system to control access to news and information.</li>
                        <li>Provides a comprehensive CRUD system (Create, Read, Update, Delete) via an administrative
                            Dashboard.</li>
                    </ul>
                </div>
                <div class="project-image flex justify-center items-center">
                    <img src={newsDashboard} alt="CMS News Management System" />
                </div>
            </div>
        </section>
    )
}

export default Project