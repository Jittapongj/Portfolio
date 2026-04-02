import { useState } from 'react'
import Nav from '../components/Nav'
import Home from '../pages/home'
import Project from '../pages/project'
import Footer from '../components/Footer'

function MainLayout() {
  const [activePage, setActivePage] = useState('home');

  // ใช้ Object Mapping เพื่อจัดการการแสดงผลหน้าต่างๆ
  const renderContent = () => {
    const pages = {
      home: <Home />,
      projects: <Project />,
      contact: <div>Contact Page (Coming Soon)</div>
    };
    return pages[activePage] || <Home />;
  };

  return (
    <div id='Main-Layout' className='flex flex-col min-h-screen'>
      <Nav setActivePage={setActivePage} activePage={activePage} />
      <main className='flex grow container mx-auto'>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout