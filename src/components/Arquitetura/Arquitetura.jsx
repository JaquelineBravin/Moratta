import styles from './Arquitetura.module.css'

function Arquitetura() {
  return (
    <section className={styles.arquitetura}>
      <h2 className={styles.heading}>Arquitetura pensada para sua casa</h2>
      <img
        src="/img/arquiteturaPensada.jpg"
        alt="Sala de estar planejada pela Moratta"
        className={styles.image}
      />
      <div className={styles.text}>
        <p>
          💡Com a consultoria online, você recebe orientações personalizadas para cada detalhe do
          seu projeto — seja de interiores, acabamentos ou escolhas de layout, tudo com atenção,
          cuidado e profissionalismo
        </p>
        <p>
          💡 Interiores à distância:
          <br />
          O mesmo cuidado que você teria presencialmente, agora ao alcance de um clique. Projetos
          pensados para cada necessidade, com soluções criativas e práticas, sem complicação.
        </p>
        <p>🔑 Porque o seu espaço merece ser pensado com carinho e dedicação, onde quer que você esteja.</p>
      </div>
    </section>
  )
}

export default Arquitetura
