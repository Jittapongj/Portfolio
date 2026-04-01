import profileImg from '../assets/images/Jittapong.jpg'
import '../styles/home.scss'

function Home() {
    return (
        <section id="homepage" className="flex flex-col justify-center items-center gap-8">
            <div className="profile overflow-hidden ">
                <img src={profileImg} alt="Profile" className="profile-image" />
            </div>
            <div class="content-info">
                <h1 className='flex justify-center mb-4'>Jittapong Jongjai</h1>
                <h3 className='flex justify-center'>About Me</h3>
                <p>Hello, my nickname is Toon, 24 years old, currently studying in the Faculty of Engineering, Computer
                    Science Program, Rajamangala University of Technology Lanna, Chiang Mai. I am interested in learning and
                    developing skills in the field of Front-end Developer, especially in HTML PHP jQuery and SCSS. I have
                    analytical,
                    development, and creative thinking skills. I am determined to use my acquired skills to develop my
                    computer career and am committed to continuously developing myself so that this career can progress
                    steadily and sustainably.</p>
            </div>
        </section>
    )
}

export default Home