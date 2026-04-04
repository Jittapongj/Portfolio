import profileImg from '../assets/images/Jittapong.jpg'
import '../styles/home.scss'
import '../styles/ui/button.scss'

function Home({ setActivePage }) {
    return (
        <section id="homepage" className="grid grid-cols-1 sm:grid-cols-2 items-center grow w-full">
            <div className="profile overflow-hidden flex justify-center mx-auto">
                <img src={profileImg} alt="Profile" className="profile-image" />
            </div>
            <div className="content-info">
                <h1 className='flex justify-center sm:justify-start mb-4'>Jittapong Jongjai</h1>
                <h3 className='flex justify-center sm:justify-start'>I'm a Front-end Developer</h3>
                <p> Hi, I'm Jittapong Jongjai, I'm a 24-year-old Computer Engineering graduate from Rajamangala University of Technology Lanna, Chiang Mai.
                    As a Front-end Developer driven by a passion for web development, I focus on bridging the gap between design and functionality 
                    through creativity and adaptability. I am committed to continuous learning and building a steady, progressive career in tech.</p>
                <div className='btn btn-primary mt-5'>Resume</div>
            </div>
        </section>
    )
}

export default Home