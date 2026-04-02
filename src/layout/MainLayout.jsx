import { useState } from 'react'
import Nav from '../components/Nav'
import Home from '../pages/home'
import About from '../pages/about'
import Project from '../pages/project'
import Footer from '../components/Footer'

function MainLayout() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    const pages = {
      home: <Home setActivePage={setActivePage} />,
      about: <About />,
      projects: <Project />,
      contact: <div>Contact Page (Coming Soon)</div>
    };
    return pages[activePage] || <Home setActivePage={setActivePage} />;
  };

  return (
    <div id='Main-Layout' className='flex flex-col min-h-screen'>
      <Nav setActivePage={setActivePage} activePage={activePage} />
      <main className='flex justify-center grow container mx-auto'>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout