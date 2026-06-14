import { motion } from 'framer-motion'

function Datenschutz() {
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: '0 30px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '40px' }}>
          Datenschutzerklärung
        </h1>

        {[
          {
            titel: '1. Verantwortlicher',
            inhalt: 'Konrad Wendel Textile Solutions\nKonrad Wendel\nMarkt 15, 07407 Rudolstadt\nE-Mail: konradwendel26@gmail.com'
          },
          {
            titel: '2. Welche Daten wir erheben',
            inhalt: 'Wenn du unser Kontaktformular nutzt erheben wir folgende Daten:\n- Name\n- E-Mail-Adresse\n- Telefonnummer (freiwillig)\n- Branche und Paket\n- Nachricht\n\nDiese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.'
          },
          {
            titel: '3. EmailJS',
            inhalt: 'Wir nutzen den Dienst EmailJS (emailjs.com) zur Übermittlung von Kontaktformular-Daten. EmailJS verarbeitet die eingegebenen Daten auf Servern in den USA. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).'
          },
          {
            titel: '4. Firebase (Google)',
            inhalt: 'Wir nutzen Google Firebase zur Speicherung von Bewertungen. Firebase wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA betrieben. Die Daten werden in der EU (Frankfurt) gespeichert. Grundlage: Art. 6 Abs. 1 lit. f DSGVO.'
          },
          {
            titel: '5. Google Analytics',
            inhalt: 'Wir nutzen Google Analytics zur Analyse des Nutzerverhaltens auf unserer Website. Google Analytics verwendet Cookies. Die Daten werden anonymisiert verarbeitet. Du kannst der Nutzung widersprechen unter: tools.google.com/dlpage/gaoptout\n\nGrundlage: Art. 6 Abs. 1 lit. f DSGVO.'
          },
          {
            titel: '6. Deine Rechte',
            inhalt: 'Du hast jederzeit das Recht auf:\n- Auskunft über deine gespeicherten Daten\n- Berichtigung falscher Daten\n- Löschung deiner Daten\n- Widerspruch gegen die Verarbeitung\n\nKontakt: konradwendel26@gmail.com'
          },
          {
            titel: '7. Speicherdauer',
            inhalt: 'Kontaktformular-Daten werden nach Abschluss der Anfrage gelöscht. Bewertungen bleiben gespeichert bis zur Löschung durch den Nutzer oder uns.'
          },
          {
            titel: '8. Cookies',
            inhalt: 'Diese Website verwendet nur technisch notwendige Cookies sowie Cookies von Google Analytics. Du kannst Cookies in deinem Browser deaktivieren.'
          },
        ].map((abschnitt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass"
            style={{ padding: '25px', marginBottom: '20px' }}
          >
            <h2 className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
              {abschnitt.titel}
            </h2>
            <p style={{ color: '#888', lineHeight: '1.8', whiteSpace: 'pre-line', fontSize: '0.95rem' }}>
              {abschnitt.inhalt}
            </p>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Datenschutz