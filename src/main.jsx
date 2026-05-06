import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/project.jsx';
import ProjectPost from './pages/ProjectPost.jsx';
import Contact from './pages/contact.jsx';
import './index.css'
import './styles/main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "projects/:projectSlug",
        element: <ProjectPost />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
