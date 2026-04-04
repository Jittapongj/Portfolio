import "../styles/footer.scss"
import GithubImg from '../assets/images/github.png'
import LinkedinImg from '../assets/images/linkedin.png'

function Footer() {
    return (
        <section id="Footer" className="flex flex-wrap justify-between items-center ">
            <div className="footer-info">
                <div>Phone :</div>
                <p className="mb-0">061-795-6385</p>
            </div>
            <div className="footer-info">
                <div>Email :</div>
                <p className="mb-0">jittapongj@gmail.com</p>
            </div>
            <div className="footer-info ">
                <div>Follow Me :</div>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/jittapong-j" target="_blank">
                        <img src={LinkedinImg} alt="LinkedIn icon" />
                    </a>
                    <a href="https://github.com/Jittapongj" target="_blank">
                        <img src={GithubImg} alt="GitHub icon" />
                    </a>
                </div>
            </div>
            <div>© 2026 By Jittadev. All rights reserved. </div>
        </section>
    )
}

export default Footer