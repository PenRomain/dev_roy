import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} data-motion-reveal="zoom" data-pointer-card="true">
      <div className={styles.badge} data-motion-delay="1" data-motion-reveal="down">
        Карьера в IT - это система, а не удача. Начинайте сейчас.
      </div>
      <h1 className={styles.header} data-motion-delay="2" data-motion-reveal="up">
        Хотите выйти из карьерной стагнации?
        <br />
        Пройдите обучение с сеньор-разработчиком и увеличьте свою зарплату
      </h1>
    </section>
  );
}
