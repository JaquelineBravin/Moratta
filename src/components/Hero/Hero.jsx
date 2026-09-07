import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/img/parte_B.png" alt="" className={styles.image} />
      <h1 className={styles.heading}>
        Arquitetura e Design de Interiores, criando espaços que abraçam, acolhem e encantam.
      </h1>
    </section>
  )
}

export default Hero
