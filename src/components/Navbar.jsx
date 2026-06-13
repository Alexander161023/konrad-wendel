import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(45,122,79,0.15)',
      }}>

        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.img
            src="/logo.png"
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            style={{ height: '50px', filter: 'drop-shadow(0 0 10px rgba(45,122,79,0.3))' }}
          />
        </Link>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '1px solid rgba(45,122,79,0.3)',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '10px',
          }}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            style={{ display: 'block', width: '25px', height: '2px', background: '#2d7a4f' }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{ display: 'block', width: '25px', height: '2px', background: '#2d7a4f' }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            style={{ display: 'block', width: '25px', height: '2px', background: '#2d7a4f' }}
          />
        </button>
      </nav>

      {/* BURGER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* HINTERGRUND OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 998,
                backdropFilter: 'blur(5px)'
              }}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0, right: 0,
                width: '300px',
                height: '100vh',
                background: 'rgba(10,10,10,0.95)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(45,122,79,0.2)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px',
                gap: '25px'
              }}
            >
              {/* LOGO IM MENU */}
              <img src="/logo.png" alt="Logo" style={{ height: '60px', marginBottom: '20px', filter: 'drop-shadow(0 0 10px rgba(45,122,79,0.3))' }} />

              {[
                { label: 'Start', path: '/' },
                { label: 'Leistungen', path: '/leistungen' },
                { label: 'Entstehung', path: '/entstehung' },
                { label: 'Branchen', path: '/branchen' },
                { label: 'Rezensionen', path: '/rezensionen' },
                { label: 'Preise', path: '/preise' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Kontakt', path: '/kontakt' },
                { label: 'Impressum', path: '/impressum' },
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '1.3rem',
                      fontFamily: 'Bebas Neue',
                      letterSpacing: '3px',
                      display: 'block',
                      padding: '5px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.target.style.color = '#2d7a4f'}
                    onMouseLeave={e => e.target.style.color = 'white'}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* KONTAKT BUTTON */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '20px' }}
              >
                <Link to="/kontakt" onClick={() => setMenuOpen(false)}>
                  <button className="gradient-button" style={{
                    width: '100%',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    letterSpacing: '2px',
                    fontFamily: 'Bebas Neue'
                  }}>
                    JETZT ANFRAGEN →
                  </button>
                </Link>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar