import Image from "next/image";
import styles from "@styles/Hero.module.css";
import { title } from "process";
import { Subtitles } from "lucide-react";

interface Props{
  title: string, 
  subTitle: string, 
  subTitleSecond: string
}

export default function Hero({title, subTitle, subTitleSecond}: Props) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.media}>
        <Image
          className={styles.heder_logo}
          src="/images/3RBQhvFe3NvUSuzQTZz.png"
          alt=""
          fill
          priority
        />
        <div className={styles.vignette} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {/* Открываем новый <span className={styles.pink}>салон</span>{" "}
            эротического массажа в Кемерово */}
            {title}
          </h1>
          <p className={styles.subtitle}>
            {/* Большая вечеринка 18+, шоу‑программа, DJ и welcome‑бар. */}
              {subTitle}
            <br />
              {subTitleSecond}
            {/* Смело, красиво и по‑взрослому — без компромиссов. */}

          </p>
          <div className={styles.actions}>
            <a href="#contacts" className={styles.cta}>
              Записаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
