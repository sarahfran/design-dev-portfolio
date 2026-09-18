import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // <-- Check spelling carefully
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
       {
        path: "/about",
        element: <About />
      },
       {
        path: "/projects/:id",
        element: <ProjectDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
