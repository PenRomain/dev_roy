import Image from 'next/image';
import { SectionLabel } from '@/shared/section-label';
import styles from './about.module.css';

export function About() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <SectionLabel>о нас</SectionLabel>
      </div>
      <div className={styles.content}>
        <Image
          className={styles.photo}
          src="/images/daniil-portrait.png"
          alt="Даниил Лаптев"
          width={285}
          height={327}
          priority
        />
        <div className={styles.text}>
          <p>
            Мы «ДЕВ РОЙ»! Школа карьерного роста фронтенд-разработчиков - от новичков до опытных
            специалистов.
          </p>
          <p>Я, Даниил Лаптев, автор и руководитель этого проекта.</p>
          <p>
            Моя главная задача - сделать карьерный рост в IT понятным, системным и целостным. Как
            этого добиться? Обучать реальным требованиям рынка и сопровождать до измеримого
            результата.
          </p>
          <p>
            Я лично руковожу вашим обучением, контролирую процесс и помогаю на каждом этапе. А для
            повышения эффективности привлекаю опытных разработчиков.
          </p>
        </div>
      </div>
    </section>
  );
}
