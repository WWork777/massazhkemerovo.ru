import Head from "next/head";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Masters from "@components/Masters";
import Programs from "@components/Programs";
import Extras from "@components/Extras";
import About from "@components/About";
import Certificates from "@components/Certificates";
import FAQ from "@components/FAQ";
import Contacts from "@components/Contacts";
import Footers from "@components/Footers";

export const metadata = {
  title: "Салон эротического массажа в Кемерово",
  description:
    "VIP салон эротического массажа в Кемерово. Индивидуальные программы, приватная атмосфера, профессиональные массажистки. Доступные цены.  ",
  keywords:
    "эротический массаж Кемерово, салон массажа, релакс для мужчин, эротические услуги",
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
      <Header />
      <main>
        <Hero />
        <Masters />
        <Programs />
        <Extras />
        <About />
        <Certificates />
        <FAQ />
        <Contacts />
        <Footers />
      </main>
    </>
  );
}
