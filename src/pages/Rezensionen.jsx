import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { db } from '../firebase'
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import emailjs from '@emailjs/browser'

function Rezensionen() {
  const [bewertungen, setBewertungen] = useState([])
  const [sterne, setSterne] = useState(0)
  const [hoveredStern, setHoveredStern] = useState(0)
  const [name, setName] = useState('')
  const [branche, setBranche] = useState('')
  const [text, setText] = useState('')
  const [gesendet, setGesendet] = useState(false)
  const [laden, setLaden] = useState(true)

  useEffect(() => {
    const ladeBewertungen = async () => {
      try {
        const q = query(collection(db, 'bewertungen'), orderBy('datum', 'desc'))
        const snapshot = await getDocs(q)
        const daten = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setBewertungen(daten)
      } catch (error) {
        console.error('Fehler beim Laden:', error)
      }
      setLaden(false)
    }
    ladeBewertungen()
  }, [])

  const handleAbsenden = async () => {
    if (!name || !text || sterne === 0) {
      alert('Bitte fülle Name, Bewertung und Sterne aus!')
      return
    }
    try {
      const neueBewertung = { name, branche, text, sterne, datum: new Date() }
      await addDoc(collection(db, 'bewertungen'), neueBewertung)
      setBewertungen([{ ...neueBewertung, id: Date.now() }, ...bewertungen])
      await emailjs.send('service_7klka9o', 'template_jcyc034', {
        name, email: 'Neue Bewertung', telefon: '-',
        branche: branche || 'Nicht angegeben',
        paket: sterne + ' Sterne', menge: '-', nachricht: text,
      }, 'DYkJQz2tD2LRGqTxP')
      setName(''); setBranche(''); setText(''); setSterne(0)
      setGesendet(true)
      setTimeout(() => setGesendet(false), 3000)
    } catch (error) {
      console.error(error)
    }
  }

  const durchschnitt = bewertungen.length > 0
    ? (bewertungen.reduce((sum, b) => sum + b.sterne, 0) / bewertungen.length).toFixed(1)
    : null

  const inputStyle = {
    width: '100%', padding: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px', color: 'white',
    fontSize: '1rem', outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: 'white', paddingTop: '120px', paddingBottom: '80px' }}>

      <div style={{
        position: 'fixed', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(45,122,79,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Rezensionen</h1>

        {durchschnitt && (
          <div className="glass" style={{ display: 'inline-block', padding: '20px 40px', marginBottom: '20px' }}>
            <div className="gradient-text" style={{ fontSize: '3rem', fontFamily: 'Bebas Neue' }}>{durchschnitt}</div>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{'⭐'.repeat(Math.round(durchschnitt))}</div>
            <div style={{ color: '#888', fontSize: '0.9rem' }}>
              Basierend auf {bewertungen.length} Bewertung{bewertungen.length !== 1 ? 'en' : ''}
            </div>
          </div>
        )}
      </motion.div>

      {/* FORMULAR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 30px', position: 'relative', zIndex: 1 }}
      >
        <div className="glass" style={{ padding: '30px' }}>
          <h2 className="gradient-text" style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Bewertung abgeben</h2>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '10px' }}>Deine Bewertung *</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1,2,3,4,5].map(s => (
                <motion.span key={s} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredStern(s)} onMouseLeave={() => setHoveredStern(0)}
                  onClick={() => setSterne(s)}
                  style={{ fontSize: '2rem', cursor: 'pointer', opacity: s <= (hoveredStern || sterne) ? 1 : 0.3, transition: 'opacity 0.2s' }}>
                  ⭐
                </motion.span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Name *</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Dein Name" style={inputStyle} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Branche</label>
            <select value={branche} onChange={e => setBranche(e.target.value)} style={inputStyle}>
              <option value="">Branche wählen...</option>
              <option value="Gym & Fitness">Gym & Fitness</option>
              <option value="Bank & Finanzen">Bank & Finanzen</option>
              <option value="Kanzlei & Recht">Kanzlei & Recht</option>
              <option value="Sportverein">Sportverein</option>
              <option value="Creator & Social Media">Creator & Social Media</option>
              <option value="Handwerker">Handwerker</option>
              <option value="Tierheim">Tierheim</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Deine Erfahrung *</label>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Erzähl anderen von deiner Erfahrung..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleAbsenden}
            className="gradient-button"
            style={{ color: 'white', border: 'none', padding: '15px', borderRadius: '30px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>
            BEWERTUNG ABSCHICKEN ⭐
          </motion.button>

          <AnimatePresence>
            {gesendet && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="gradient-text" style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>
                ✅ Danke für deine Bewertung!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* BEWERTUNGEN */}
      {laden ? (
        <div style={{ textAlign: 'center', color: '#888', position: 'relative', zIndex: 1 }}>Wird geladen...</div>
      ) : bewertungen.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ textAlign: 'center', color: '#444', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⭐</div>
          <p style={{ fontSize: '1.2rem' }}>Noch keine Bewertungen – sei der Erste und teile deine Erfahrung mit uns!</p>
        </motion.div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px', maxWidth: '1100px', margin: '0 auto',
          padding: '0 30px', position: 'relative', zIndex: 1
        }}>
          {bewertungen.map((r, i) => (
            <motion.div key={r.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass glow"
              style={{ padding: '25px' }}
            >
              <div style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{'⭐'.repeat(r.sterne)}</div>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
                <div style={{ fontWeight: 'bold' }}>{r.name}</div>
                {r.branche && <div className="gradient-text" style={{ fontSize: '0.85rem' }}>{r.branche}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Rezensionen