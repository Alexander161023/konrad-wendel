import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Entstehung from './pages/Entstehung'
import Branchen from './pages/Branchen'
import Kontakt from './pages/Kontakt'
import Rezensionen from './pages/Rezensionen'
import FAQ from './pages/FAQ'
import Impressum from './pages/Impressum'
import Preise from './pages/Preise'
import Datenschutz from './pages/Datenschutz'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/entstehung" element={<Entstehung />} />
        <Route path="/branchen" element={<Branchen />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/rezensionen" element={<Rezensionen />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App