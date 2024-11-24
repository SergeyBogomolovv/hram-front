import { motion, Variants } from 'motion/react'
import styles from './hero.module.css'

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
}

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Лучшая школа
          <br /> для лучшего мира
        </motion.h1>
        <motion.p
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          Здесь мы собираемся каждое воскресенье, чтобы учиться, творить и веселиться, создавая
          уникальные рукодельные проекты. Наши занятия помогут детям развить творческие способности,
          моторику рук и воображение.
        </motion.p>
      </div>
    </section>
  )
}
