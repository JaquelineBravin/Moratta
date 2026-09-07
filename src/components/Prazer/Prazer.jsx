import styles from './Prazer.module.css';
import leticia from '../../img/leticia2.png';

function Prazer() {
  return (
    <section className={styles.prazer}>
      <img
        src={leticia}
        alt="Leticia Martins em um projeto de arquitetura de interiores"
        className={styles.photo}
      />
      <p className={styles.greeting}>Prazer, sou a</p>
      <p className={styles.name}>Leticia Martins.</p>
      <p className={styles.bio}>
        Sou arquiteta e trabalho com projetos de interiores e consultorias
        online em todo o Brasil.
      </p>
    </section>
  );
}

export default Prazer;
