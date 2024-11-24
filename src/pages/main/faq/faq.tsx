import Accordion from '@/shared/ui/accordion'
import styles from './faq.module.css'
import { motion, Variants } from 'motion/react'

const accordionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

const MotionAccordion = motion(Accordion)

export default function FaqSection() {
  return (
    <section className={styles.container}>
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
  )
}
