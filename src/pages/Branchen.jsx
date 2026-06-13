import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Branchen() {
  const [gewählt, setGewählt] = useState(null)
  const [slider1, setSlider1] = useState(50)
  const [slider2, setSlider2] = useState(50)

  const branchen = [
    { id: 'gym', icon: '💪', name: 'Gym & Fitness' },
    { id: 'bank', icon: '🏦', name: 'Bank & Finanzen' },
    { id: 'kanzlei', icon: '⚖️', name: 'Kanzlei & Recht' },
    { id: 'sport', icon: '⚽', name: 'Sportverein' },
    { id: 'creator', icon: '🎥', name: 'Creator & Social Media' },
    { id: 'handwerk', icon: '🔧', name: 'Handwerker' },
    { id: 'tierheim', icon: '🐾', name: 'Tierheim' },
  ]

  const getBilder = (id) => {
    if (id === 'bank') {
      return {
        vorher1: '/branchen/bank_vorher1.jpg.jpeg',
        nachher1: '/branchen/bank_nachher1.jpg.jpg',
        vorher2: '/branchen/bank_vorher2.jpg.jpeg',
        nachher2: '/branchen/bank_nachher2.jpg.jpg',
      }
    }
    return {
      vorher1: '/branchen/' + id + '_vorher1.jpg.jpeg',
      nachher1: '/branchen/' + id + '_nachher1.jpg.jpeg',
      vorher2: '/branchen/' + id + '_vorher2.jpg.jpeg',
      nachher2: '/branchen/' + id + '_nachher2.jpg.jpeg',
    }
  }

  const Slider = ({ vorher, nachher, slider, setSlider }) => {
    const handleClick = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percent = Math.min(99, Math.max(1, (x / rect.width) * 100))
      setSlider(percent)
    }

    const handleMouseMove = (e) => {
      if (e.buttons !== 1) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percent = Math.min(99, Math.max(1, (x / rect.width) * 100))
      setSlider(percent)
    }

    return (
      <div style={{ marginBottom: '60px' }}>

        {/* ÜBERSCHRIFT */}
        <h3 style={{ textAlign: 'center', color: '#2d7a4f', marginBottom: '20px', fontSize: '1.1rem' }}>
          Bei uns vs. Woanders
        </h3>

        <div
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            width: '100%',
            height: '350px',
            borderRadius: '15px',
            overflow: 'hidden',
            border: '1px solid #222',
            marginBottom: '15px',
            userSelect: 'none',
            cursor: 'ew-resize'
          }}
        >
          <img
            src={nachher}
            alt="Von uns"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          />

          <div style={{
            position: 'absolute',
            top: 0, right: 0,
            width: (100 - slider) + '%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src={vorher}
              alt="Woanders"
              style={{
                position: 'absolute',
                top: 0, right: 0,
                width: (100 / (100 - slider) * 100) + '%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none'
              }}
            />
          </div>

          <div style={{
            position: 'absolute',
            top: 0,
            left: slider + '%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '100%',
            background: '#2d7a4f',
            zIndex: 5,
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            top: '50%',
            left: slider + '%',
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#2d7a4f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 6,
            fontSize: '1.1rem',
            color: 'white',
            pointerEvents: 'none',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            ↔
          </div>

          {slider > 15 && (
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(45,122,79,0.9)', padding: '4px 10px', borderRadius: '5px', fontSize: '0.8rem', color: 'white', zIndex: 4, pointerEvents: 'none' }}>
              Von uns
            </div>
          )}

          {slider < 85 && (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '4px 10px', borderRadius: '5px', fontSize: '0.8rem', color: '#ccc', zIndex: 4, pointerEvents: 'none' }}>
              Woanders
            </div>
          )}
        </div>

        <input
          type="range"
          min="1"
          max="99"
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#2d7a4f', cursor: 'pointer' }}
        />
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      paddingTop: '120px',
      paddingBottom: '80px',
      fontFamily: 'Arial, sans-serif'
    }}>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#2d7a4f', marginBottom: '15px' }}>
          {gewählt ? gewählt.icon + ' ' + gewählt.name : 'Für welche Branche?'}
        </h1>
        {!gewählt && (
          <p style={{ color: '#888', fontSize: '1.1rem' }}>
         Jede Branche hat andere Bedürfnisse. Wir kennen sie alle. Wähle deine Branche und sieh wie wir deine Marke auf das nächste Level bringen.
          </p>
        )}
      </motion.div>

      <AnimatePresence>
        {!gewählt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 30px'
            }}
          >
            {branchen.map((branche, i) => (
              <motion.div
                key={branche.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setGewählt(branche); setSlider1(50); setSlider2(50) }}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  borderRadius: '15px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{branche.icon}</div>
                <h3 style={{ fontSize: '1rem', color: '#2d7a4f' }}>{branche.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gewählt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ maxWidth: '800px', margin: '0 auto', padding: '0 30px' }}
          >
            <button
              onClick={() => setGewählt(null)}
              style={{
                background: 'none',
                border: '1px solid #2d7a4f',
                color: '#2d7a4f',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '40px',
                fontSize: '1rem'
              }}
            >
              ← Zurück
            </button>

            <Slider
              vorher={getBilder(gewählt.id).vorher1}
              nachher={getBilder(gewählt.id).nachher1}
              slider={slider1}
              setSlider={setSlider1}
            />

            <Slider
              vorher={getBilder(gewählt.id).vorher2}
              nachher={getBilder(gewählt.id).nachher2}
              slider={slider2}
              setSlider={setSlider2}
            />

            <div style={{ textAlign: 'center' }}>
              <motion.a
                href="/kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  background: '#2d7a4f',
                  color: 'white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                Jetzt Anfrage stellen →
              </motion.a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Branchen