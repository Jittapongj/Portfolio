import profileImg from '../assets/images/Jittapong-removebg.png'
import '../styles/home.scss'
import '../styles/ui/button.scss'
import Skills from '../components/ui/Skill';
import ProjectList from '../components/ui/ProjectList';
import { expertiseData } from '../components/ui/Expertise';
import LineIcon from '../assets/images/contacts/line.svg'
import LinkedinImg from '../assets/images/contacts/linkedin.svg'
import facebookIcon from '../assets/images/contacts/facebook.svg';
import instagramIcon from '../assets/images/contacts/instagram.svg';
import { FileText, Mail } from 'lucide-react';
import { ProjectCard } from '../components/ui/card';

function Home() {
    return (
        <section id="homepage">
            <section id="profile-section" className="px-4 grid grid-cols-1 sm:grid-cols-2 items-center grow w-full animate-fade-in ">
                <div className="profile relative flex justify-center mx-auto">
                    <div className="profile-bg absolute"></div>
                    <img src={profileImg} alt="Profile" className="profile-image relative" />
                    <div className='box-social-link absolute flex flex-col items-center gap-2 justify-center'>
                        <div>Social Media Link</div>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/thiztoon" target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Facebook icon" className='social-icon' />
                            </a>
                            <a href="https://instagram.com/thiztoon" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram icon" className='social-icon' />
                            </a>
                            <a href="https://line.me/ti/p/szrybb" target="_blank" rel="noopener noreferrer">
                                <img src={LineIcon} alt="Line icon" className='social-icon' />
                            </a>
                            <a href="https://linkedin.com/in/jittapong-j" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedinImg} alt="LinkedIn icon" className='social-icon' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content-info">
                    <span className="text-blue-400 font-medium tracking-wider mb-2 uppercase text-sm">Welcome to my portfolio</span>
                    <h1 className='flex justify-center sm:justify-start mb-2'>Jittapong Jongjai</h1>
                    <h3 className='flex justify-center sm:justify-start'>Junior Front-end Developer</h3>
                    <p> Hi, I'm Jittapong Jongjai (Toon), I'm a 24-year-old Computer Engineering graduate from Rajamangala University of Technology Lanna, Chiang Mai.
                        As a Front-end Developer driven by a passion for web development, I focus on bridging the gap between design and functionality
                        through creativity and adaptability. I am committed to continuous learning and building a steady, progressive career in tech.</p>
                    <div className='flex flex-wrap gap-4 mt-8 justify-center sm:justify-start'>
                        <a href="mailto:jittapongj@gmail.com" className='btn btn-primary inline-flex items-center gap-2'>
                            <Mail size={20} /> Contact
                        </a>
                        <a href="/file/Resume_jittapong.pdf" download="Resume_jittapong.pdf" className='btn btn-primary inline-flex items-center gap-2'>
                            <FileText size={20} /> Resume
                        </a>
                    </div>

                </div>
            </section>

            <section className="expertise-section px-4 py-20">
                <div className="expertise-wrapper">
                    <h2 className="heading text-3xl font-bold text-center mb-12">My Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {expertiseData.map((item) => (
                            <div key={item.id} className="expertise-item flex flex-col items-center text-center">
                                <div className="icon-wrapper mb-4 p-4">
                                    <div className='icon'>{item.icon}</div>
                                </div>
                                <h3 className="title">{item.title}</h3>
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="projects-section px-4 py-20">
                <div className="projects-wrapper">
                    <h2 className="heading text-3xl font-bold text-center mb-12">My Projects</h2>
                    <ProjectList />
                </div>
            </section>

            <section className="skills-section px-4 py-20">
                <div className="skills-wrapper">
                    <h2 className="heading text-3xl font-bold text-center mb-12">My Skills</h2>
                    <Skills />
                </div>
            </section>
        </section>


    )
}

export default Home