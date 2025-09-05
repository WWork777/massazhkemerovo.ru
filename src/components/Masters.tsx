'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import styles from '@styles/Masters.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const masters = [
  { name: 'Катя', img: '/images/masters/second.jpeg', age: 24, height: 164, weight: 50, bust: 2 },
  { name: 'Яна', img: '/images/masters/1.jpeg', age: 26, height: 170, weight: 55, bust: 1 },
  { name: 'Ева', img: '/images/masters/Ева.png', age: 22, height: 177, weight: 64, bust: 3 },
  { name: 'Адель', img: '/images/masters/Адель.png', age: 21, height: 180, weight: 56 },
  { name: 'Яна', img: '/images/masters/Яна.png', age: 24, height: 173, weight: 55, bust: 3 },
  { name: 'Кирилл', img: '/images/masters/Кирилл.jpg', age: 32, height: 175, weight: 85, record: true },
]

type SlickSettings = {
  dots?: boolean
  infinite?: boolean
  speed?: number
  slidesToShow?: number
  slidesToScroll?: number
  arrows?: boolean
  afterChange?: (index: number) => void
}

export default function Masters() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const sliderRef = useRef<Slider>(null)

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 480) setItemsPerPage(1)
      else if (window.innerWidth <= 768) setItemsPerPage(1)
      else if (window.innerWidth <= 960) setItemsPerPage(2)
      else if (window.innerWidth <= 1024) setItemsPerPage(2)
      else setItemsPerPage(3)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const totalItems = masters.length
  const maxIndex = Math.max(0, totalItems - itemsPerPage)

  const settings: SlickSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: itemsPerPage,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentIndex(index),
  }

  const nextSlide = () => sliderRef.current?.slickNext()
  const prevSlide = () => sliderRef.current?.slickPrev()

  return (
    <section id="masters">
      <div className={styles.container}>
        <div className={styles.container_panel}>
          <h2 className={styles.text_m1}>Наши Мастера</h2>
          <div className={styles.arrows}>
            <button onClick={prevSlide} disabled={currentIndex === 0} aria-label="previous">
              <Image src="/images/icons/arrow-left.svg" alt="" width={24} height={24} />
            </button>
            <button onClick={nextSlide} disabled={currentIndex >= maxIndex} aria-label="next">
              <Image src="/images/icons/arrow-right.svg" alt="" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className={styles.slider_container}>
          <Slider ref={sliderRef} {...settings} className="custom-slider">
            {masters.map((m) => (
              <div key={m.name} style={{ paddingRight: '20px' }}>
                <article className={styles.card}>
                  <div className={styles.photo}>
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(max-width: 480px) 100vw, 360px"
                    />

                    <div className={styles.info_panel}>
                      <div>
                        {m.record && (
                          <div className={styles.recordWrapper}>
                            <span className={styles.recordText}>Мастер по предварительной записи</span>
                          </div>
                        )}
                        <h3>{m.name}</h3>
                        <div className={styles.info}>
                          {m.age && <span>Возраст: {m.age}</span>}
                          {m.height && <span>Рост: {m.height}</span>}
                          {m.weight && <span>Вес: {m.weight}</span>}
                          {m.bust && <span>Размер груди: {m.bust}</span>}
                        </div>
                      </div>

                      <a className="btn" href="#contacts">Записаться</a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
