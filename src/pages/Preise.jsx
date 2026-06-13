import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Preise() {
  const pakete = [
    {
      name: 'Logo Entwicklung',
      preis: 'ab 599€',
      beschreibung: 'Für Startups und Unternehmen die noch kein Logo haben.',
      leistungen: [
        '3 individuelle Logo Entwürfe',
        'Unbegrenzte Überarbeitungen',
        'Alle Dateiformate (PNG, SVG, AI)',
        'Persönliche Beratung',
        'Nutzungsrechte inklusive',
      ],
      highlight: false,
      farbe: '#1a4d2e'
    },
    {
      name: 'Premium Paket',
      preis: 'ab 349€',
      beschreibung: 'Unser beliebtestes Paket – perfekt für alle die ihr Logo verbessern und auf Kleidung drucken wollen.',
      leistungen: [
        'Logo Verbesserung & Optimierung',
        '2 professionelle Mockups',
        'Kostenlose Überarbeitung',
        'Druck auf alle Kleidungsstücke',
        'Versand direkt zu dir',
        'Druckkosten individuell kalkuliert',
      ],
      highlight: true,
      farbe: '#2d7a4f'
    },
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
        position: 'fixed', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(45,122,79,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* TITEL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
          Unsere Pakete
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
         Keine versteckten Kosten, kein Kleingedrucktes. Du weißt immer was du bekommst – bevor du einen Cent ausgibst. 
          Druckkosten werden individuell nach deiner Bestellung kalkuliert.
        </p>
      </motion.div>

      {/* PAKETE */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '800px',
        margin: '0 auto 60px',
        padding: '0 30px',
        position: 'relative',
        zIndex: 1
      }}>
        {pakete.map((paket, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className={paket.highlight ? 'glow' : 'glass'}
            style={{
              padding: '40px 30px',
              borderRadius: '20px',
              border: paket.highlight ? '2px solid rgba(45,122,79,0.5)' : '1px solid rgba(255,255,255,0.05)',
              background: paket.highlight ? 'linear-gradient(135deg, rgba(45,122,79,0.15), rgba(10,10,10,0.9))' : 'rgba(255,255,255,0.03)',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            {/* BELIEBT BADGE */}
            {paket.highlight && (
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #1a4d2e, #4CAF50)',
                padding: '5px 20px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontFamily: 'Bebas Neue',
                letterSpacing: '2px',
                whiteSpace: 'nowrap'
              }}>
                BELIEBTESTES PAKET
              </div>
            )}

            <h2 className="gradient-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
              {paket.name}
            </h2>

            <div className="gradient-text" style={{ fontSize: '3rem', fontFamily: 'Bebas Neue', marginBottom: '15px' }}>
              {paket.preis}
            </div>

            <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6' }}>
              {paket.beschreibung}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '35px', textAlign: 'left' }}>
              {paket.leistungen.map((leistung, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 + j * 0.05 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <span className="gradient-text" style={{ fontSize: '1rem', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#ccc', fontSize: '0.95rem' }}>{leistung}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-button"
                style={{
                  width: '100%',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'Bebas Neue',
                  letterSpacing: '2px'
                }}
              >
                JETZT ANFRAGEN →
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* RABATT HINWEIS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass"
        style={{
          maxWidth: '600px',
          margin: '0 auto 60px',
          padding: '25px 30px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          border: '1px solid rgba(45,122,79,0.2)'
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🐾⚽</div>
        <h3 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          Vereine & Tierheime – 20% Rabatt
        </h3>
        <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Für gemeinnützige Organisationen bieten wir 20% Rabatt auf alle Pakete. 
          Einfach im Formular erwähnen!
        </p>
      </motion.div>

      {/* FAQ HINWEIS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <p style={{ color: '#888', marginBottom: '15px' }}>Noch Fragen zu den Preisen?</p>
        <Link to="/faq">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'none',
              border: '1px solid rgba(45,122,79,0.3)',
              color: '#2d7a4f',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'Bebas Neue',
              letterSpacing: '2px'
            }}
          >
            ZUR FAQ →
          </motion.button>
        </Link>
      </motion.div>

    </div>
  )
}

export default Preise