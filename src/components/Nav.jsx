import '../styles/nav.scss'
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
    { name: 'Home', value: 'home' },
    // { name: 'About', value: 'about' },
    { name: 'Projects', value: 'projects' },
    { name: 'Contact', value: 'contact' }
  ];

function Nav() {
  return (
    <section id="nav" className='navbar flex flex-col sm:flex-row gap-2 justify-between items-center top-0 sticky bg-white shadow-sm px-8 py-4'>
      <div className='logo flex items-baseline'>
        <Link to="/" className="name font-bold text-xl cursor-pointer">
          Jittadev
        </Link>
      </div>
      <div className='menu flex'>
        <ul className="mb-0 flex items-center list-none gap-6">
          {menuItems.map((item) => (
            <li key={item.value}>
              <NavLink 
                to={item.value === 'home' ? '/' : `/${item.value}`} 
                // เพิ่ม prop end เช็คเฉพาะหน้า home เพื่อไม่ให้ active ทำงานซ้อนกันทุกหน้า
                end={item.value === 'home'} 
                className={({ isActive }) => `nav-link relative flex justify-center ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Nav