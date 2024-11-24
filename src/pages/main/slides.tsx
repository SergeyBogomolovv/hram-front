import styles from './slides.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Zoom } from 'swiper/modules'
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
      modules={[A11y, Autoplay, Zoom]}
      autoplay={{ delay: 3000 }}
      zoom
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
          <div className={styles.card} style={{ backgroundImage: `url('${slide.img}')` }}>
            <p>{slide.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
