import '../styles/nav.scss'
function Nav({ setActivePage, activePage }) {
  
  // สร้าง Array ของเมนู
  const menuItems = [
    { name: 'About', value: 'about' },
    { name: 'Projects', value: 'projects' },
    { name: 'Contact', value: 'contact' }
  ];

  return (
    <section id="nav" className='navbar flex flex-col sm:flex-row justify-between items-center top-0 sticky bg-white shadow-sm px-8 py-4'>
        <div className='logo flex items-baseline'>
            <button onClick={() => setActivePage('home')} className="name font-bold text-xl cursor-pointer">
              Jittadev
            </button>
            <p className="ms-2 mb-0 text-sm">Front-end Developer</p>
        </div>
        <div className='menu flex'>
            <ul className="mb-0 flex items-center list-none gap-6">
              {menuItems.map((item) => (
                <li key={item.value}>
                  <span
                    onClick={() => setActivePage(item.value)}
                    className={`nav-link ${activePage === item.value ? 'active' : ''}`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default Nav