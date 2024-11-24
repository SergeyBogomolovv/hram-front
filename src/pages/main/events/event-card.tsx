import { Link } from 'react-router'
import { motion } from 'framer-motion'
import styles from './event-card.module.css'

interface EventCardProps {
  image: string
  text: string
  link: string
}

export default function EventCard({ image, text, link }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.card_content}>
        <Link to={link} className={styles.image_wrapper}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image}
            alt='image'
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className={styles.text_content}>
          <motion.p>{text}</motion.p>
          <Link to={link} className={styles.link}>
            Читать далее...
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
