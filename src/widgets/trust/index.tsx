import Image from 'next/image';
import { ArrowRight, Dot } from 'lucide-react';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import { SectionLabel } from '@/shared/section-label';
import styles from './trust.module.css';

const facts = [
  'Работал в топовых компаниях: Яндекс, Лаборатория Касперского, крупный международный финтех',
  'Прошел путь от стажера до старшего разработчика',
  'Действующий разработчик, понимаю актуальные требования рынка, регулярно хожу на собеседования',
];

export function Trust() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <div>
          <SectionLabel>доверие</SectionLabel>
        </div>
        <h2 className={styles.title}>Почему мне стоит доверять</h2>
      </div>

      <div className={styles.grid}>
        <figure className={styles.person}>
          <Image
            className={styles.stage}
            src="/images/daniil-stage.png"
            alt="Даниил Лаптев выступает на мероприятии"
            width={591}
            height={716}
          />
          <figcaption>
            <strong>Даниил Лаптев</strong>
            <span>Сеньор фронтенд разработчик & руководитель карьерной школы</span>
          </figcaption>
        </figure>
        <div className={styles.content}>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <strong>6</strong>
              <span>лет в IT</span>
            </div>
            <div className={styles.metric}>
              <strong>20+</strong>
              <span>трудоустроенных учеников</span>
            </div>
            <div className={`${styles.metric} ${styles.hot}`}>
              <strong>400к+</strong>
              <span>зарплата</span>
            </div>
          </div>
          <ol className={styles.facts}>
            {facts.map((fact, index) => (
              <li key={fact}>
                <span>0{index + 1}</span>
                {fact}
              </li>
            ))}
            <div className={styles.links}>
              <a href={`#${anchors.results}`}>
                Смотри записи моих собесов
                <div className={styles.arrow}>
                  <Dot />
                  <Dot />
                  <ArrowRight aria-hidden="true" size={42} strokeWidth={1.6} />
                </div>
              </a>
              <Button
                className={styles.contactButton}
                href="https://t.me/the_real_daniil"
                variant="solid"
              >
                Телеграм-канал
              </Button>
              <Button className={styles.contactButton} href="https://youtube.com" variant="solid">
                YouTube-канал
              </Button>
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
