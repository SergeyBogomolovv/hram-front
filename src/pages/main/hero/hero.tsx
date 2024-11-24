import { motion } from 'framer-motion'
import styles from './hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Лучшая школа
          <br /> для лучшего мира
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
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
