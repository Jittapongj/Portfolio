import { useState } from 'react'
import '../styles/main.scss'
import Nav from '../components/Nav'
import Home from '../pages/home'
import About from '../pages/about'
import Project from '../pages/project'
import Contact from '../pages/contact'
import Footer from '../components/Footer'

function MainLayout() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    const pages = {
      home: <Home setActivePage={setActivePage} />,
      about: <About />,
      projects: <Project />,
      contact: <Contact />
    };
    return pages[activePage] || <Home setActivePage={setActivePage} />;
  };

  return (
    <div id='Main-Layout' className='flex flex-col min-h-screen'>
      <Nav setActivePage={setActivePage} activePage={activePage} />
      <main className='main-content flex justify-center grow mx-auto px-8 lg:px-16 w-full'>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout