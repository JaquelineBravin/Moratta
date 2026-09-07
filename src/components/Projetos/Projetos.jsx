import { projetos } from './projetosData'
import styles from './Projetos.module.css'

function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.heading}>Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <article key={projeto.id} className={styles.card}>
            <img
              src={projeto.image}
              alt={`${projeto.room} — ${projeto.city}`}
              className={styles.cardImage}
            />
            <p className={styles.room}>{projeto.room}</p>
            <p className={styles.city}>{projeto.city}</p>
            <p className={styles.category}>{projeto.category}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos
