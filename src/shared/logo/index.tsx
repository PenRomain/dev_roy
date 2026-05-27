import Image from 'next/image';
import clsx from 'clsx';
import styles from './logo.module.css';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a className={clsx(styles.logo, inverted && styles.inverted)} href="#" aria-label="ДЕВ РОЙ">
      {inverted ? (
        <span className={styles.footerText}>«ДЕВ РОЙ»</span>
      ) : (
        <Image src="/images/devroy-logo.png" alt="" width={120} height={52} priority />
      )}
    </a>
  );
}
