import Image from 'next/image'
import styles from '@styles/Hero.module.css'

export default function Hero(){
  return (
    <section className={styles.hero} id="home">
     <div className={styles.media}>
       <Image className={styles.heder_logo} src="/images/3RBQhvFe3NvUSuzQTZz.png" alt="" fill priority />
       <div className={styles.vignette} />
     </div>
     <div className={styles.container}>
       <div className={styles.content}>
         <h1 className={styles.title}>
          Эротический <span className={styles.pink}>Массаж</span> <br /> в Кемерово
         </h1>
         <p className={styles.subtitle}>
           Избавьтесь от стресса и рутины под умелыми <br /> руками наших мастеров
         </p>
         <div className={styles.actions}>
           <a href="#contacts" className={styles.cta}>Записаться</a>
         </div>
       </div>
     </div>
   </section>
  )
}
