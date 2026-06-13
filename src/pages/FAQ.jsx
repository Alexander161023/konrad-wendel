import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQ() {
  const [offen, setOffen] = useState(null)

  const fragen = [
    { frage: 'Wie lange dauert es bis ich meine Kleidung bekomme?', antwort: 'Nach der Freigabe deines Designs dauert die Produktion und Lieferung in der Regel 7-14 Werktage.' },
    { frage: 'Was ist der Unterschied zwischen Standard und Premium?', antwort: 'Premium beinhaltet eine individuelle Designberatung, hochwertigere Materialien und detailliertere Mockups.' },
    { frage: 'Ich habe kein Logo – kann ich trotzdem bestellen?', antwort: 'Ja! Wir bieten einen kompletten Logo-Entwicklungsservice an. Ideal für Startups.' },
    { frage: 'Welche Dateiformate akzeptiert ihr für Logos?', antwort: 'Wir akzeptieren PNG, JPG, PDF, AI und EPS. Für die beste Qualität empfehlen wir Vektordateien.' },
    { frage: 'Gibt es eine Mindestbestellmenge?', antwort: 'Nein! Dank unseres Print-on-Demand Verfahrens kannst du auch einzelne Stücke bestellen.' },
    { frage: 'Kann ich die Kleidung vor der Produktion sehen?', antwort: 'Ja! Du bekommst immer zuerst detaillierte Mockups zur Ansicht und Freigabe.' },
    { frage: 'In welche Länder liefert ihr?', antwort: 'Wir liefern deutschlandweit.' },
    { frage: 'Was passiert wenn mir das Design nicht gefällt?', antwort: 'Kein Problem! Wir überarbeiten das Design bis du zufrieden bist.' },
    { frage: 'Wie kann ich bezahlen?', antwort: 'Wir akzeptieren Überweisung, PayPal und alle gängigen Kreditkarten.' },
    { frage: 'Ich bin ein Verein mit kleinem Budget – gibt es Rabatte?', antwort: 'Ja! Für Vereine, Tierheime und gemeinnützige Organisationen bieten wir Sonderkonditionen an.' },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      paddingTop: '120px',
      paddingBottom: '80px',
    }}>

      <div style={{
        position: 'fixed',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(45,122,79,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
          Häufige Fragen
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
         Hier findest du Antworten auf die häufigsten Fragen. Falls deine Frage nicht dabei ist – schreib uns einfach direkt!
        </p>
      </motion.div>

      <div style={{
        maxWidth: '750px',
        margin: '0 auto',
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        position: 'relative',
        zIndex: 1
      }}>
        {fragen.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass"
            style={{ overflow: 'hidden', border: offen === i ? '1px solid rgba(45,122,79,0.5)' : '1px solid rgba(255,255,255,0.05)' }}
          >
            <button
              onClick={() => setOffen(offen === i ? null : i)}
              style={{
                width: '100%',
                padding: '20px 25px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
                fontFamily: 'Montserrat'
              }}
            >
              {item.frage}
              <motion.span
                animate={{ rotate: offen === i ? 45 : 0 }}
                className="gradient-text"
                style={{ fontSize: '1.5rem', flexShrink: 0 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {offen === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 25px 20px', color: '#888', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    {item.antwort}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default FAQ