import { useState } from 'react';
import styles from './CardProjeto.module.css';

export function CardProjeto({ projeto }) {
  const [atual, setAtual] = useState(0);

  function nextPhoto() {
    setAtual((i) => (i + 1) % projeto.image.length);
  }

  function prevPhoto() {
    setAtual((i) => (i - 1 + projeto.image.length) % projeto.image.length);
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={projeto.image[atual]}
          alt={`${projeto.room} — ${projeto.city}`}
          className={styles.cardImage}
        />
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prevPhoto}
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextPhoto}
        >
          ›
        </button>
      </div>
      <p className={styles.room}>{projeto.room}</p>
      <p className={styles.city}>{projeto.city}</p>
      <p className={styles.category}>{projeto.category}</p>
    </article>
  );
}
