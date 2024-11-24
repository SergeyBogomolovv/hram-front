import { Link } from 'react-router'
import styles from './event-card.module.css'

interface EventCardProps {
  image: string
  text: string
  link: string
}

export default function EventCard({ image, text, link }: EventCardProps) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.card_content}>
        <img src={image} alt='image' className={styles.card_image} />
        <div className={styles.text_content}>
          <p>{text}</p>
          <Link to={link} className={styles.link}>
            Читать далее...
          </Link>
        </div>
      </div>
    </div>
  )
}
