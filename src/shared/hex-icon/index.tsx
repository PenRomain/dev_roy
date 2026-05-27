import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './hex-icon.module.css';

type HexIconProps = {
  children: ReactNode;
  className?: string;
};

export function HexIcon({ children, className }: HexIconProps) {
  return (
    <span className={clsx(styles.hex, className)}>
      <svg className={styles.border} aria-hidden="true" viewBox="0 0 64 72">
        <path d="M32 2C33.4 2 34.8 2.4 36 3.1L58 15.6C60.5 17 62 19.7 62 22.5V49.5C62 52.3 60.5 55 58 56.4L36 68.9C33.5 70.3 30.5 70.3 28 68.9L6 56.4C3.5 55 2 52.3 2 49.5V22.5C2 19.7 3.5 17 6 15.6L28 3.1C29.2 2.4 30.6 2 32 2Z" />
      </svg>
      <span className={styles.content}>{children}</span>
    </span>
  );
}
