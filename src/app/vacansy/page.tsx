import Vacansy from '@components/sections/Vacansy';
import Contacts from '@/components/sections/Contacts';
import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';

export default function VacansyPage() {
  return (
    <>
      <Hero
        title='Открываем новый салон эротического массажа в Кемерово'
        subTitle='Большая вечеринка 18+, шоу‑программа, DJ и welcome‑бар.'
        subTitleSecond='Смело, красиво и по‑взрослому — без компромиссов.'
      />
      <Vacansy />
      <FAQ />
      <Contacts />
    </>
  );
}
