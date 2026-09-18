import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* 
        The <Outlet /> component acts as a placeholder.
        React Router will swap this out for your Home.jsx content 
        or any other page you route to later.
      */}
      <Outlet />
    </div>
  )
}

export default App
