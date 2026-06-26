import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Kontakt() {
  const [gesendet, setGesendet] = useState(false)
  const [laden, setLaden] = useState(false)
  const [gewählteSterne, setGewählteSterne] = useState(0)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', telefon: '', branche: '', paket: '', menge: '', nachricht: '', datei: null
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleDatei = (e) => setFormData({ ...formData, datei: e.target.files[0] })

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.branche || !formData.paket) {
      alert('Bitte fülle mindestens Name, Email, Branche und Paket aus!')
      return
    }
    setLaden(true)
    try {
      await emailjs.send('service_7klka9o', 'template_jcyc034', {
        name: formData.name, email: formData.email, telefon: formData.telefon,
        branche: formData.branche, paket: formData.paket, menge: formData.menge, nachricht: formData.nachricht,
      }, 'DYkJQz2tD2LRGqTxP')
      setGesendet(true)
    } catch (error) {
      alert('Fehler beim Senden – bitte nochmal versuchen!')
    }
    setLaden(false)
  }

  const handleStern = (stern) => {
    setGewählteSterne(stern)
    setTimeout(() => {
      navigate('/rezensionen')
    }, 800)
  }

  const inputStyle = {
    width: '100%', padding: '15px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px', color: 'white',
    fontSize: '1rem', outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
    colorScheme: 'dark',
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

      <AnimatePresence>
        {!gesendet && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            style={{ maxWidth: '600px', margin: '0 auto', padding: '0 30px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Jetzt Anfrage stellen</h1>
              <p style={{ color: '#888', fontSize: '1.1rem' }}>Kein langes Warten, kein anonymes System. Füll das Formular aus – ich melde mich persönlich bei dir innerhalb von 24 Stunden!</p>
            </div>

            {[
              { label: 'Name *', name: 'name', placeholder: 'Dein Name' },
              { label: 'Email *', name: 'email', placeholder: 'deine@email.de' },
              { label: 'Telefon', name: 'telefon', placeholder: '+49 123 456789' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                <input name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder} style={inputStyle} />
              </div>
            ))}

            <div>
              <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Branche *</label>
              <select name="branche" value={formData.branche} onChange={handleChange} style={inputStyle}>
                <option value="">Branche wählen...</option>
                <option value="gym">Gym & Fitness</option>
                <option value="bank">Bank & Finanzen</option>
                <option value="kanzlei">Kanzlei & Recht</option>
                <option value="sportverein">Sportverein</option>
                <option value="creator">Creator & Social Media</option>
                <option value="handwerker">Handwerker</option>
                <option value="tierheim">Tierheim</option>
              </select>
            </div>

            <div>
              <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Paket *</label>
              <select name="paket" value={formData.paket} onChange={handleChange} style={inputStyle}>
                <option value="">Paket wählen...</option>
                <option value="premium">Premium</option>
                <option value="logo">Logo Entwicklung</option>
              </select>
            </div>

            <div>
              <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Ungefähre Stückzahl</label>
              <input name="menge" value={formData.menge} onChange={handleChange} placeholder="z.B. 50 Stück" style={inputStyle} />
            </div>

            <AnimatePresence>
              {formData.paket === 'premium' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Logo hochladen</label>
                  <input type="file" accept="image/*,.pdf,.ai,.eps" onChange={handleDatei}
                    style={{ ...inputStyle, border: '1px solid rgba(45,122,79,0.3)', cursor: 'pointer' }} />
                  {formData.datei && <p className="gradient-text" style={{ fontSize: '0.85rem', marginTop: '8px' }}>✅ {formData.datei.name}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label style={{ color: '#888', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Nachricht</label>
              <textarea name="nachricht" value={formData.nachricht} onChange={handleChange} placeholder="Was wünschst du dir?" rows={5}
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <motion.button whileHover={{ scale: laden ? 1 : 1.03 }} whileTap={{ scale: laden ? 1 : 0.97 }}
              onClick={handleSubmit} disabled={laden}
              className="gradient-button"
              style={{ color: 'white', border: 'none', padding: '18px', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: laden ? 'not-allowed' : 'pointer', fontFamily: 'Bebas Neue', letterSpacing: '2px', opacity: laden ? 0.7 : 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
  <input
    type="checkbox"
    id="datenschutz"
    required
    style={{ marginTop: '4px', accentColor: '#2d7a4f', width: '18px', height: '18px', cursor: 'pointer', flexShrink: 0 }}
  />
  <label htmlFor="datenschutz" style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6' }}>
    Ich habe die <a href="/datenschutz" style={{ color: '#2d7a4f' }} target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
  </label>
</div>
              {laden ? 'WIRD GESENDET...' : 'ANFRAGE ABSENDEN →'}
            </motion.button>
          </motion.div>
        )}

        {gesendet && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}>

            <div style={{ position: 'relative', height: '200px', marginBottom: '30px' }}>
              <motion.div initial={{ x: -300 }} animate={{ x: 120 }} transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ position: 'absolute', bottom: '20px', fontSize: '3rem' }}>🏃‍♂️</motion.div>
              <motion.div initial={{ x: -300, opacity: 0 }} animate={{ x: 160, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ position: 'absolute', bottom: '55px', fontSize: '1.5rem' }}>📬</motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                style={{ position: 'absolute', right: '20px', bottom: '0px', textAlign: 'center' }}>
                <div style={{ fontSize: '5rem' }}>🏢</div>
                <img src="/logo.png" alt="Logo" style={{ width: '60px', marginTop: '-15px', filter: 'drop-shadow(0 0 10px rgba(45,122,79,0.5))' }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5, type: 'spring' }}
                style={{ position: 'absolute', right: '10px', top: '0px', fontSize: '2rem' }}>✅</motion.div>
            </div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}
              className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              Danke, {formData.name}!
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
              style={{ color: '#888', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 50px' }}>
              Deine Anfrage ist bei uns angekommen! Wir melden uns innerhalb von 24 Stunden bei dir.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}>
              <p style={{ color: '#888', marginBottom: '15px', fontSize: '1.1rem' }}>
                Wie war deine Erfahrung mit uns?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '2.5rem' }}>
                {[1,2,3,4,5].map(stern => (
                  <motion.span
                    key={stern}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleStern(stern)}
                    style={{
                      cursor: 'pointer',
                      opacity: gewählteSterne >= stern ? 1 : 0.3,
                      transition: 'opacity 0.2s'
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              {gewählteSterne > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="gradient-text"
                  style={{ marginTop: '15px', fontWeight: 'bold' }}
                >
                  Du wirst zur Bewertungsseite weitergeleitet...
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Kontakt