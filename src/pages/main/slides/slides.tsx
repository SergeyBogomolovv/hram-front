import styles from './slides.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/bundle'

export default function SlidesSection() {
  const slides = [
    { img: '/card1.jpeg', content: 'Музыкальный и танцевальный показ' },
    { img: '/card2.jpg', content: 'Кружок рисования и шитья' },
    { img: '/card3.jpg', content: 'Воскресный поход в храм на площади' },
    { img: '/card4.jpg', content: 'Lorem ipsum dolor sit amet' },
  ]
  return (
    <Swiper
      className={styles.slider}
      modules={[A11y, Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      spaceBetween={16}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide zoom key={slide.img}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className={styles.card}
            style={{ backgroundImage: `url('${slide.img}')` }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {slide.content}
            </motion.p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
