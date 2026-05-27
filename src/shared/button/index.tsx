import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import styles from './button.module.css';

type ButtonVariant = 'solid' | 'outline' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  endAdornment?: ReactNode;
};

export function Button({
  children,
  href,
  variant = 'solid',
  className,
  endAdornment = <ArrowUpRight aria-hidden="true" size={24} strokeWidth={2} />,
}: ButtonProps) {
  return (
    <a className={clsx(styles.button, styles[variant], className)} href={href}>
      <span>{children}</span>
      {endAdornment}
    </a>
  );
}
