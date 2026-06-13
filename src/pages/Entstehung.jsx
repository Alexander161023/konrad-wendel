import { motion } from 'framer-motion'

function Entstehung() {
  const schritte = [
    { nummer: '01', icon: '📋', titel: 'Formular ausfüllen', text: 'Du füllst unser einfaches Online-Formular aus. Branche, Wunsch, Logo – alles wird abgefragt.' },
    { nummer: '02', icon: '📬', titel: 'Wir melden uns', text: 'Innerhalb von 24 Stunden kontaktieren wir dich und besprechen alle Details persönlich.' },
    { nummer: '03', icon: '🎨', titel: 'Design & Mockup', text: 'Wir erstellen dein individuelles Design und schicken dir Mockups zur Ansicht und Freigabe.' },
    { nummer: '04', icon: '✅', titel: 'Freigabe', text: 'Du gibst das Design frei – erst dann geht es in die Produktion. Keine Überraschungen.' },
    { nummer: '05', icon: '🏭', titel: 'Produktion', text: 'Deine Kleidung wird professionell bedruckt und qualitätsgeprüft.' },
    { nummer: '06', icon: '📦', titel: 'Versand & Lieferung', text: 'Deine fertige Kleidung wird direkt zu dir geliefert – sicher verpackt und pünktlich.' },
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
        style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
          So funktioniert es
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
         Kein Rätselraten, keine versteckten Kosten. Bei uns weißt du immer genau wo deine Bestellung steht – von der ersten Nachricht bis zur Lieferung an deine Tür.
        </p>
      </motion.div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 1
      }}>

        {/* LINIE */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, transparent, #2d7a4f, #4CAF50, #2d7a4f, transparent)',
          transform: 'translateX(-50%)'
        }} />

        {schritte.map((schritt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            style={{
              display: 'flex',
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '60px',
              position: 'relative'
            }}
          >
            {/* PUNKT */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '20px',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2d7a4f, #4CAF50)',
              border: '3px solid #050505',
              zIndex: 1,
              boxShadow: '0 0 15px rgba(45,122,79,0.5)'
            }} />

            {/* KARTE */}
            <div className="glass glow" style={{ width: '45%', padding: '25px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{schritt.icon}</div>
              <div className="gradient-text" style={{ fontSize: '0.8rem', marginBottom: '5px', letterSpacing: '3px', fontFamily: 'Bebas Neue' }}>
                SCHRITT {schritt.nummer}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{schritt.titel}</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>{schritt.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Entstehung