import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>Карьера в IT - это система, а не удача. Начинайте сейчас.</div>
      <h1 className={styles.header}>
        Хотите выйти из карьерной стагнации?
        <br />
        Пройдите обучение с сеньор-разработчиком и увеличьте свою зарплату
      </h1>
    </section>
  );
}
