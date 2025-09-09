import Head from 'next/head';
import Header from '@components/Header';
import Hero from '@/components/sections/Hero';
import Masters from '@/components/sections/Masters';
import Programs from '@/components/sections/Programs';
import Extras from '@/components/sections/Extras';
import About from '@/components/sections/About';
import Certificates from '@/components/sections/Certificates';
import FAQ from '@/components/sections/FAQ';
import Contacts from '@/components/sections/Contacts';
import Footers from '@/components/Footers';
import Vacansy from '@/components/sections/Vacansy';

export const metadata = {
  title: 'Салон эротического массажа в Кемерово',
  description:
    'VIP салон эротического массажа в Кемерово. Индивидуальные программы, приватная атмосфера, профессиональные массажистки. Доступные цены.  ',
  keywords:
    'эротический массаж Кемерово, салон массажа, релакс для мужчин, эротические услуги',
  alternates: {
    canonical: `https://massazhkemerovo.ru`,
  },
  openGraph: {
    title: `Салон эротического массажа в Кемерово`,
    description: `Элитный салон эротического массажа в Кемерово. Индивидуальный подход, эксклюзивные программы релакса`,
    url: `https://massazhkemerovo.ru`,
    images: [
      {
        url: `/hero/hero.jpg`,
        alt: `ethereum`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Hero
          title='Открываем новый салон эротического массажа в Кемерово'
          subTitle='Большая вечеринка 18+, шоу‑программа, DJ и welcome‑бар.'
          subTitleSecond='Смело, красиво и по‑взрослому — без компромиссов.'
        />
        <Vacansy />
        <Masters />
        <Programs />
        <Extras />
        <About />
        <Certificates />
        <FAQ />
        <Contacts />
      </main>
    </>
  );
}
