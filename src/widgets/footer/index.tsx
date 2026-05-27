import { Mail, Send } from 'lucide-react';
import { Logo } from '@/shared/logo';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.brand} data-motion-reveal="left">
          <Logo inverted />
          <div className={styles.socials}>
            <a className={styles.social} aria-label="Email" href="mailto:iwant@therealdaniil.ru">
              <Mail size={24} />
            </a>
            <a className={styles.social} aria-label="Telegram" href="https://t.me/the_real_daniil">
              <Send size={24} />
            </a>
          </div>
        </div>
        <div data-motion-delay="1" data-motion-reveal="up">
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.contact}>Email: iwant@therealdaniil.ru</p>
          <p className={styles.contact}>Telegram: @the_real_daniil</p>
        </div>
        <div data-motion-delay="2" data-motion-reveal="up">
          <h2 className={styles.title}>Полезное</h2>
          <a className={styles.paragraph} href="#contact">
            Политика конфиденциальности
          </a>
          <a className={styles.paragraph} href="#contact">
            Публичная оферта
          </a>
        </div>
      </div>
      <p className={styles.copy}>© 2026 «ДЕВ РОЙ» - Все права защищены</p>
    </footer>
  );
}
