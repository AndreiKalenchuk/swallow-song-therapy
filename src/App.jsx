import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import AdultServicesPage from './components/AdultServicesPage'
import PediatricServicesPage from './components/PediatricServicesPage'
import ContactsPage from './components/ContactsPage'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="clinic-title">Swallow Song Therapy</h1>
          <div className="contact-info">
            <p className="address">707 West 7-th ave, Suite 240,<br />Spokane, WA 99204</p>
            <p className="phone">Phone: (509) 507 0153</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <NavLink to="/" end className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
          About us
        </NavLink>
        <NavLink to="/adult-speech-pathology-services" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
          Adult Services
        </NavLink>
        <NavLink to="/pediatric-speech-pathology-services" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
          Pediatric Services
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}>
          Contacts
        </NavLink>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/adult-speech-pathology-services" element={<AdultServicesPage />} />
          <Route path="/pediatric-speech-pathology-services" element={<PediatricServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
