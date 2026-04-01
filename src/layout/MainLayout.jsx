import Nav from '../components/Nav'
import Home from '../pages/home'
import Project from '../pages/project'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <section id='Main-Layout' className='flex flex-col min-h-screen'>
        <Nav></Nav>
        <Home></Home>
        {/* <Project></Project> */}
        <Footer></Footer>
    </section>
  )
}

export default MainLayout