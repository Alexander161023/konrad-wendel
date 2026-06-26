import { motion } from 'framer-motion'

function Impressum() {
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
          Impressum
        </h1>

        {[
          {
            titel: 'Angaben gemäß § 5 DDG',
            inhalt: 'Konrad Wendel Textile Solutions\nKonrad Wendel\nMarkt 15\n07407 Rudolstadt\nDeutschland'
          },
          {
            titel: 'Kontakt',
            inhalt: 'E-Mail: konradwendel26@gmail.com\nKontaktformular: Über unsere Website erreichbar'
          },
          {
            titel: 'Steuerliche Angaben',
            inhalt: 'Wirtschafts-Identifikationsnummer (W-IdNr.): DE463098997\nGemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).'
          },
          {
            titel: 'Streitschlichtung',
            inhalt: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
          },
          {
            titel: 'Haftung für Inhalte',
            inhalt: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.'
          },
          {
            titel: 'Urheberrecht',
            inhalt: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung des jeweiligen Autors.'
          },
          {
            titel: 'Datenschutz',
            inhalt: 'Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Weitere Informationen findest du in unserer Datenschutzerklärung.'
          },
        ].map((abschnitt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass"
            style={{ padding: '25px', marginBottom: '20px' }}
          >
            <h2 className="gradient-text" style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
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

export default Impressum