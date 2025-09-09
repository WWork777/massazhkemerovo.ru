import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import Contacts from '@/components/sections/Contacts';

export const metadata = {
  title: 'О нас',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title='Открываем новый салон эротического массажа в Кемерово'
        subTitle='Большая вечеринка 18+, шоу‑программа, DJ и welcome‑бар.'
        subTitleSecond='Смело, красиво и по‑взрослому — без компромиссов.'
      />
      <About />
      <FAQ />
      <Contacts />
    </>
  );
}
