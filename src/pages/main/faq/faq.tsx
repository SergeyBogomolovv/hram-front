import { useState } from 'react'
import styles from './faq.module.css'
import { motion } from 'framer-motion'

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const questions = [
    { question: 'Где находится воскресная школа?', answer: 'Школа находится по адресу...' },
    {
      question: 'С какого возраста ребенок может участвовать?',
      answer: 'Участвовать могут дети от 5 лет.',
    },
    {
      question: 'Чем занимается воскресная школа?',
      answer: 'Мы проводим занятия по религиозному воспитанию, творчеству и общению.',
    },
    { question: 'Сколько стоит обучение в воскресной школе?', answer: 'Обучение бесплатное.' },
  ]

  return (
    <section className={styles.container}>
      {questions.map((item, index) => (
        <>
          <div key={index} className={styles.question} onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <span className={styles.icon}>?</span>
          </div>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.answer}
            >
              <span className={styles.icon}>✓</span>
              <span>{item.answer}</span>
            </motion.div>
          )}
        </>
      ))}
    </section>
  )
}
