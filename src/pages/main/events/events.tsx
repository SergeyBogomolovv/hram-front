import styles from './events.module.css'
import EventCard from '@/widgets/events/event-card'
import { Input, InputAdornment } from '@mui/material'
import { motion } from 'motion/react'
import { MdSearch } from 'react-icons/md'

interface Event {
  image: string
  text: string
  link: string
}

const events: Event[] = [
  {
    image: '/placeholder1.jpg',
    text: '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    link: '#',
  },
  {
    image: '/placeholder2.jpg',
    text: '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    link: '#',
  },
]

const MotionCard = motion(EventCard)

export default function EventsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мероприятия</h1>
        <Input
          placeholder='Поиск мероприятий'
          startAdornment={
            <InputAdornment position='start'>
              <MdSearch size={24} />
            </InputAdornment>
          }
        />
      </div>
      <div className={styles.events}>
        {events.map((event, index) => (
          <MotionCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            href={event.link}
            content={event.text}
            image={event.image}
          />
        ))}
      </div>
    </section>
  )
}
