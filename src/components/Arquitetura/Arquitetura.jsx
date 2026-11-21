import styles from './Arquitetura.module.css';
import arquiteturaPensada from '../../img/arquiteturaPensada.jpg';

function Arquitetura() {
  return (
    <section className={styles.arquitetura}>
      <h2 className={styles.heading}>Arquitetura pensada para sua casa</h2>
      <img
        src={arquiteturaPensada}
        alt="Sala de estar planejada pela Moratta"
        className={styles.image}
      />
      <div className={styles.text}>
        <p>
          💡Com a consultoria online, você recebe
          <strong> orientações personalizadas </strong>
          para cada detalhe do seu projeto — seja de interiores, acabamentos ou
          escolhas de layout, tudo com atenção, cuidado e profissionalismo
        </p>
        <p>
          💡O mesmo cuidado que você teria presencialmente, agora
          <strong> ao alcance de um clique. </strong>Projetos pensados para cada
          necessidade, com soluções criativas e práticas, sem complicação.
        </p>
        <p>
          🔑 Porque o seu espaço merece ser pensado com carinho e dedicação,
          <strong> onde quer que você esteja.</strong>
        </p>
      </div>
    </section>
  );
}

export default Arquitetura;
