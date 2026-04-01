import "../styles/nav.scss"

function Nav() {
  return (
    <section id="nav" className='navbar flex flex-col sm:flex-row justify-center sm:justify-between items-center top-0 sticky'>
        <div className='logo flex items-baseline'>
            <a className="name">Jittadev</a>
            <p className="ms-2 mb-0">Front-end</p>
        </div>
        <div className='menu flex'>
            <ul className="mb-0 flex items-center style-none gap-4">
                <li><a className='nav-link'>About</a></li>
                <li><a className='nav-link'>Projects</a></li>
                <li><a className='nav-link'>Contact</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Nav