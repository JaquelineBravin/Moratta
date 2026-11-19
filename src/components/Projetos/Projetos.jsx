import { projetos } from './projetosData';
import styles from './Projetos.module.css';
import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// A lib é CommonJS: dependendo do bundler, o import vem como { default: Componente }.
const Carousel = CarouselModule.default ?? CarouselModule;

function Projetos() {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 0 },
      items: 4,
    },
  };
  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.heading}>Projetos</h2>
      <div className={styles.grid}>
        <Carousel
          responsive={responsive}
          itemClass={styles.item}
          containerClass={styles.carousel}
        >
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
        </Carousel>
      </div>
    </section>
  );
}

export default Projetos;
