import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'ДЕВ РОЙ - школа карьерного роста',
  description:
    'Обучение с сеньор-разработчиком для роста фронтенд-разработчиков и выхода на новую зарплату.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
