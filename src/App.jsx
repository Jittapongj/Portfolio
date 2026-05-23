import { Outlet } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div id='Main-Layout' className='flex flex-col min-h-screen'>
      <Nav />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
