import HeroSection from './hero/hero'
import SlidesSection from './slides/slides'
import styles from './main.module.css'
import EventsSection from './events/events'
import Accordion from '@/shared/ui/accordion'
import { motion } from 'framer-motion'

export default function MainPage() {
  const MotionAccordion = motion(Accordion)

  const accordionVariants = {
    hidden: { scale: 0.5, opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <main className={styles.container}>
      <HeroSection />
      <SlidesSection />
      <EventsSection />
      <section className={styles.faq_container}>
        <MotionAccordion
          initial='hidden'
          whileInView='visible'
          variants={accordionVariants}
          viewport={{ once: true }}
          question='Чем занимается воскресная школа?'
          answer='Мы проводим занятия по религиозному воспитанию, творчеству и общению.'
        />
        <MotionAccordion
          initial='hidden'
          whileInView='visible'
          variants={accordionVariants}
          viewport={{ once: true }}
          question='Где находится воскресная школа?'
          answer='Школа находится по адресу...'
        />
        <MotionAccordion
          initial='hidden'
          whileInView='visible'
          variants={accordionVariants}
          viewport={{ once: true }}
          question='Сколько стоит обучение в воскресной школе?'
          answer='Обучение бесплатное.'
        />
        <MotionAccordion
          initial='hidden'
          whileInView='visible'
          variants={accordionVariants}
          viewport={{ once: true }}
          question='С какого возраста ребенок может участвовать?'
          answer='Участвовать могут дети от 5 лет.'
        />
      </section>
    </main>
  )
}
