import { Outlet } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div id='Main-Layout' className='flex flex-col min-h-screen'>
      <Nav />
      <main className='main-content flex justify-center grow mx-auto lg:px-16 w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
