import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{
      background: 'rgba(5,5,5,0.95)',
      borderTop: '1px solid rgba(45,122,79,0.2)',
      padding: '30px 40px',
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        marginBottom: '15px'
      }}>
        <Link to="/impressum" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#2d7a4f'}
          onMouseLeave={e => e.target.style.color = '#888'}>
          Impressum
        </Link>
        <Link to="/datenschutz" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#2d7a4f'}
          onMouseLeave={e => e.target.style.color = '#888'}>
          Datenschutz
        </Link>
        <Link to="/kontakt" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}
          onMouseEnter={e => e.target.style.color = '#2d7a4f'}
          onMouseLeave={e => e.target.style.color = '#888'}>
          Kontakt
        </Link>
      </div>
      <p style={{ color: '#444', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Konrad Wendel Textile Solutions – Alle Rechte vorbehalten
      </p>
    </footer>
  )
}

export default Footer