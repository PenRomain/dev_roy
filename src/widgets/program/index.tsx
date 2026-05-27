import { programSteps } from '@/shared/config/landing';
import { anchors } from '@/shared/lib/anchor';
import { HexIcon } from '@/shared/hex-icon';
import styles from './program.module.css';

export function Program() {
  return (
    <section className={styles.section} id={anchors.program}>
      <h2 className={styles.title} data-motion-reveal="up">
        Что входит в программу обучения
      </h2>
      <div className={styles.timeline}>
        {programSteps.map((step, index) => (
          <article
            className={styles.step}
            data-motion-delay={index + 1}
            data-motion-reveal={index % 2 === 0 ? 'right' : 'left'}
            data-pointer-card="true"
            data-side={index % 2 === 0 ? 'right' : 'left'}
            key={step.id}
          >
            <HexIcon className={styles.hex}>{step.id}</HexIcon>
            <div className={styles.copy}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
