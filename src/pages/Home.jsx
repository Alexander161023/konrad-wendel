import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function CountUp({ to, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate2 = () => {
      t += 0.002
      const gradient = ctx.createRadialGradient(
        canvas.width * (0.5 + 0.3 * Math.sin(t)),
        canvas.height * (0.5 + 0.3 * Math.cos(t * 0.7)),
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8
      )
      gradient.addColorStop(0, '#0d2b1a')
      gradient.addColorStop(0.4, '#050505')
      gradient.addColorStop(0.7, '#0a1a0f')
      gradient.addColorStop(1, '#050505')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.3 + 0.2 * Math.cos(t * 1.3)),
        canvas.height * (0.7 + 0.2 * Math.sin(t * 0.9)),
        0,
        canvas.width * 0.3,
        canvas.height * 0.7,
        canvas.width * 0.5
      )
      gradient2.addColorStop(0, 'rgba(45,122,79,0.15)')
      gradient2.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate2)
    }
    animate2()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const gruende = [
    { icon: '🎨', titel: 'Individuelles Design', text: 'Kein Template, kein Copy-Paste. Jedes Design wird speziell für dich und deine Branche erstellt.' },
    { icon: '⚡', titel: 'Schnelle Abwicklung', text: 'Von der Anfrage bis zum Mockup in 24 Stunden. Wir wissen dass deine Zeit wertvoll ist.' },
    { icon: '🏆', titel: 'Premium Qualität', text: 'Nur hochwertige Materialien und professioneller Druck. Kleidung die wirklich beeindruckt.' },
    { icon: '🤝', titel: 'Persönliche Betreuung', text: 'Du hast immer einen direkten Ansprechpartner. Keine anonymen Formulare, keine langen Wartezeiten.' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: 'white' }}>

      {/* HERO BEREICH */}
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>

        <canvas ref={canvasRef} style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }} />

        <motion.div
          initial={{ scale: 0, rotateY: 180, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}
        >
          <img src="/logo.png" alt="Konrad Wendel Logo"
            style={{ width: '220px', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(45,122,79,0.5))' }} />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="gradient-text"
          style={{ fontSize: '4rem', marginBottom: '10px', position: 'relative', zIndex: 1 }}
        >
          KONRAD WENDEL
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ fontSize: '1.3rem', color: '#888', letterSpacing: '6px', position: 'relative', zIndex: 1 }}
        >
          TEXTILE SOLUTIONS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{ marginTop: '60px', fontSize: '1.1rem', fontStyle: 'italic', color: '#aaa', maxWidth: '600px', position: 'relative', zIndex: 1 }}
        >
Schluss mit billiger Kleidung. Deine Marke verdient mehr.        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ marginTop: '80px', fontSize: '2rem', color: '#2d7a4f', position: 'relative', zIndex: 1 }}
        >
          ↓
        </motion.div>
      </div>

      {/* 4 HAUPT KACHELN */}
      <div style={{ padding: '80px 30px', maxWidth: '1100px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-text"
          style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}
        >
          Dein Erfolg beginnt hier 
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
          {[
            { icon: '🎨', titel: 'Logo Redesign', text: 'Wir verbessern dein bestehendes Logo', link: '/leistungen' },
            { icon: '👕', titel: 'Kleidung bedrucken', text: 'Premium Druck auf alle Kleidungsstücke', link: '/leistungen' },
            { icon: '📦', titel: 'Print on Demand', text: 'Versand direkt an dich oder deine Kunden', link: '/entstehung' },
            { icon: '✨', titel: 'Logo entwickeln', text: 'Kein Logo? Wir erstellen es von Grund auf', link: '/leistungen' },
          ].map((kachel, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glow"
            >
              <Link to={kachel.link} style={{ textDecoration: 'none', display: 'block', padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{kachel.icon}</div>
                <h3 className="gradient-text" style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{kachel.titel}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>{kachel.text}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ZÄHLER ANIMATION */}
      <div style={{ padding: '60px 30px', background: 'linear-gradient(180deg, #050505, #0a1a0f, #050505)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {[
            { zahl: 7, suffix: '', label: 'Branchen' },
            { zahl: 24, suffix: 'h', label: 'Reaktionszeit' },
            { zahl: 100, suffix: '%', label: 'Zufriedenheit' },
            { zahl: 28, suffix: '+', label: 'Premium Motive' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass"
              style={{ padding: '30px 20px' }}
            >
              <div className="gradient-text" style={{ fontSize: '3.5rem', fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>
                <CountUp to={item.zahl} suffix={item.suffix} />
              </div>
              <div style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '2px', marginTop: '5px' }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WARUM WIR */}
      <div style={{ padding: '80px 30px', background: 'linear-gradient(180deg, #050505, #0d1f15, #050505)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-text"
          style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '15px' }}
        >
          Warum Konrad Wendel?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.1rem' }}
        >
          Andere drucken. Wir erschaffen Markenerlebnisse.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '0 auto' }}>
          {gruende.map((grund, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glow"
              style={{ padding: '30px', textAlign: 'center' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{grund.icon}</div>
              <h3 className="gradient-text" style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{grund.titel}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>{grund.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <Link to="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-button"
              style={{ color: 'white', border: 'none', padding: '18px 50px', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px', fontFamily: 'Bebas Neue' }}
            >
              JETZT ANFRAGE STELLEN →
            </motion.button>
          </Link>
        </motion.div>
      </div>

    </div>
  )
}

export default Home