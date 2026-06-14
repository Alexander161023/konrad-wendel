import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

function CookieBanner() {
  const [sichtbar, setSichtbar] = useState(false)

  useEffect(() => {
    const einwilligung = localStorage.getItem('cookieEinwilligung')
    if (!einwilligung) {
      setTimeout(() => setSichtbar(true), 1000)
    }
  }, [])

  const handleAkzeptieren = () => {
    localStorage.setItem('cookieEinwilligung', 'akzeptiert')
    setSichtbar(false)
  }

  const handleAblehnen = () => {
    localStorage.setItem('cookieEinwilligung', 'abgelehnt')
    // Google Analytics deaktivieren
    window['ga-disable-G-V32P6WW8J7'] = true
    setSichtbar(false)
  }

  return (
    <AnimatePresence>
      {sichtbar && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            zIndex: 9998,
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <div className="glass" style={{
            padding: '25px 30px',
            border: '1px solid rgba(45,122,79,0.3)',
            borderRadius: '20px',
            background: 'rgba(5,5,5,0.95)',
            backdropFilter: 'blur(20px)',
          }}>
            <h3 style={{
              fontFamily: 'Bebas Neue',
              fontSize: '1.5rem',
              color: 'white',
              marginBottom: '10px',
              letterSpacing: '2px'
            }}>
              🍪 Cookie Einstellungen
            </h3>

            <p style={{
              color: '#888',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Wir nutzen Cookies für Google Analytics um unsere Website zu verbessern.
              Mehr Infos in unserer{' '}
              <Link to="/datenschutz" style={{ color: '#2d7a4f' }}>
                Datenschutzerklärung
              </Link>.
            </p>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAkzeptieren}
                className="gradient-button"
                style={{
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'Bebas Neue',
                  letterSpacing: '2px'
                }}
              >
                ALLE AKZEPTIEREN ✓
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAblehnen}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#888',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  fontFamily: 'Bebas Neue',
                  letterSpacing: '2px'
                }}
              >
                NUR NOTWENDIGE
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner