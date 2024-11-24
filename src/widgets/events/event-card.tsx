import { Link } from 'react-router'
import { motion } from 'motion/react'
import styles from './event-card.module.css'
import { forwardRef } from 'react'

interface EventCardProps {
  image: string
  content: string
  href: string
}

const EventCard = forwardRef<HTMLDivElement, EventCardProps>(({ image, content, href }, ref) => {
  return (
    <div ref={ref} className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.card_content}>
        <Link to={href} className={styles.image_wrapper}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image}
            alt='image'
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className={styles.text_content}>
          <motion.p>{content}</motion.p>
          <Link to={href} className={styles.link}>
            Читать далее...
          </Link>
        </div>
      </div>
    </div>
  )
})

EventCard.displayName = 'EventCard'

export default EventCard
