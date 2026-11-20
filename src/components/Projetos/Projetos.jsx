import { projetos } from './projetosData';
import styles from './Projetos.module.css';
import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardProjeto } from './Card/CardProjeto';

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
            <CardProjeto key={projeto.id} projeto={projeto} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projetos;
