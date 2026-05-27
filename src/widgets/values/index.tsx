import Image from 'next/image';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import { HexIcon } from '@/shared/hex-icon';
import { SectionLabel } from '@/shared/section-label';
import styles from './values.module.css';

const items = [
  {
    iconSrc: '/icons/value-preparation.svg',
    iconWidth: 41,
    iconHeight: 44,
    title: 'Подготовка',
    text: 'плана развития и стратегий прохождения собеседований',
  },
  {
    iconSrc: '/icons/value-result.svg',
    iconWidth: 42,
    iconHeight: 42,
    title: 'Результат',
    text: 'это ваша карьера и высокая зарплата',
  },
  {
    iconSrc: '/icons/value-diagnostics.svg',
    iconWidth: 42,
    iconHeight: 42,
    title: 'Диагностика',
    text: 'текущего уровня, сильных и слабых сторон',
  },
];

export function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <SectionLabel>ценности</SectionLabel>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>Три простых этапа для роста в карьере</h2>
        <p className={styles.lead}>
          «ДЕВ РОЙ» - пространство, где результат важнее маркетинга, качество - выше масштаба,
          человек - ценнее воронки.
        </p>
        <div className={styles.grid}>
          {items.map((item) => (
            <article className={styles.card} key={item.title}>
              <HexIcon className={styles.icon}>
                <Image src={item.iconSrc} alt="" width={item.iconWidth} height={item.iconHeight} />
              </HexIcon>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
          <Button className={styles.bigButton} href={`#${anchors.pricing}`}>
            Обсудить обучение
          </Button>
        </div>
      </div>
    </section>
  );
}
