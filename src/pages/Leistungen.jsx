import { motion } from 'framer-motion'

function Leistungen() {
  const leistungen = [
    { icon: '👕', titel: 'T-Shirts', text: 'Premium Qualität, perfekt bedruckt mit deinem Motiv.' },
    { icon: '🧥', titel: 'Hoodies & Pullover', text: 'Warm, stylisch und mit deiner Marke.' },
    { icon: '🧢', titel: 'Caps & Mützen', text: 'Dein Logo auf jedem Kopf.' },
    { icon: '👔', titel: 'Poloshirts', text: 'Professionell und elegant – perfekt für Büro & Bank.' },
    { icon: '🧥', titel: 'Westen & Jacken', text: 'Ideal für Handwerker und Outdoor-Teams.' },
    { icon: '👜', titel: 'Taschen & Totes', text: 'Deine Marke auch unterwegs sichtbar machen.' },
    { icon: '🩳', titel: 'Shorts & Hosen', text: 'Perfekt für Sportvereine und Gyms.' },
    { icon: '🎽', titel: 'Sporttrikots', text: 'Für Teams die zusammen gewinnen wollen.' },
    { icon: '✨', titel: 'Logo Entwicklung', text: 'Kein Logo? Kein Problem – wir entwickeln deine Marke von Grund auf. Perfekt für Startups.' },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      paddingTop: '120px',
      paddingBottom: '80px',
    }}>

      {/* HINTERGRUND GLOW */}
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

      {/* TITEL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
          Alles was deine Marke braucht
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
         Von der Idee bis zur fertigen Kleidung – alles aus einer Hand. Kein Hin und Her, kein Stress. Du sagst was du willst, wir liefern was dich begeistert.
        </p>
      </motion.div>

      {/* KACHELN */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '25px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 1
      }}>
        {leistungen.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass glow"
            style={{ padding: '30px', textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.icon}</div>
            <h3 className="gradient-text" style={{ marginBottom: '10px', fontSize: '1.3rem' }}>
              {item.titel}
            </h3>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <a href="/kontakt" style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-button"
            style={{
              color: 'white',
              border: 'none',
              padding: '18px 50px',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              letterSpacing: '2px',
              fontFamily: 'Bebas Neue'
            }}
          >
            JETZT ANFRAGE STELLEN →
          </motion.button>
        </a>
      </motion.div>

    </div>
  )
}

export default Leistungen