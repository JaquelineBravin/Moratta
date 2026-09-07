import { getWhatsAppLink } from '../../constants'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'FALE COMIGO', href: getWhatsAppLink(), external: true },
  { label: 'ORÇAMENTO', href: getWhatsAppLink(), external: true },
  { label: 'PARA ARQUITETOS', href: null },
]

function Header() {
  return (
    <header className={styles.header}>
      <img src="/img/logo.png" alt="Moratta — Arquitetura e Interiores" className={styles.logo} />
      <nav>
        {NAV_ITEMS.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </a>
          ) : (
            <span key={item.label} className={styles.navLink}>
              {item.label}
            </span>
          ),
        )}
      </nav>
    </header>
  )
}

export default Header
