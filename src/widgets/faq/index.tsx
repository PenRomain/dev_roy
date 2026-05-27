'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqItems } from '@/shared/config/landing';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import styles from './faq.module.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>('03');

  return (
    <section className={styles.section} id={anchors.faq}>
      <div className={styles.side}>
        <h2>Ответы на ключевые вопросы</h2>
        <Button className={styles.sideButton} href="#contact" variant="ghost">
          Обсудить обучение
        </Button>
      </div>
      <div className={styles.list}>
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          const answerId = `faq-answer-${item.id}`;

          return (
            <article className={styles.item} data-open={isOpen} key={item.id}>
              <div className={styles.question}>
                <span>{item.id}</span>
                <h3>{item.question}</h3>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? 'Свернуть ответ' : 'Открыть ответ'}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  type="button"
                  className={styles.answerButton}
                >
                  {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                </button>
              </div>
              <p hidden={!isOpen} id={answerId}>
                {item.answer}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
