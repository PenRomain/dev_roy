import { About } from '@/widgets/about';
import { Faq } from '@/widgets/faq';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Pricing } from '@/widgets/pricing';
import { Problems } from '@/widgets/problems';
import { Program } from '@/widgets/program';
import { Results } from '@/widgets/results';
import { Trust } from '@/widgets/trust';
import { Values } from '@/widgets/values';

import styles from './home.module.css';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className={styles.lightHoneycomb}>
          <About />
          <Values />
          <Problems />
        </div>
        <Program />
        <Trust />
        <Pricing />
        <Results />
      </main>
      <div className={styles.bottomHoneycomb}>
        <Faq />
        <Footer />
      </div>
    </>
  );
}
