import { motion } from 'framer-motion'

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/491637754482"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        zIndex: 9999,
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      💬
    </motion.a>
  )
}

export default WhatsAppButton