import { getWhatsAppLink } from '../../constants';
import styles from './Header.module.css';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const colorStart = [243, 238, 233]; // #f3eee9 — estado inicial (topo da página)
const colorEnd = [238, 224, 215]; // #af9a8d — estado final (após rolar 400px)
const scrollDistance = 400;

const NAV_ITEMS = [
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'FALE COMIGO', href: getWhatsAppLink(), external: true },
  { label: 'ORÇAMENTO', href: getWhatsAppLink(), external: true },
  { label: 'PARA ARQUITETOS', href: null },
];

function Header() {
  const progress = useScrollProgress(scrollDistance); // Hook personalizado para calcular o progresso da rolagem, variando de 0 a 1. O valor de scrollDistance é passado como argumento para determinar a distância máxima de rolagem que influencia o progresso.
  const headerBackground = interpolateColor(colorStart, colorEnd, progress);

  return (
    <header className={styles.header} style={{ background: headerBackground }}>
      <nav>
        {NAV_ITEMS.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
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
  );
}

function interpolateColor(colorStart, colorEnd, t) {
  // T representa o progresso da rolagem, variando de 0 a 1
  const [r1, g1, b1] = colorStart;
  const [r2, g2, b2] = colorEnd;
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${b})`; // Retorna a cor interpolada no formato RGB
}

export default Header;
