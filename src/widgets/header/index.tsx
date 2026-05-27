import { navItems } from '@/shared/config/landing';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import { Logo } from '@/shared/logo';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className={styles.cta} href={`#${anchors.pricing}`}>
          Обсудить обучение
        </Button>
      </div>
    </header>
  );
}
