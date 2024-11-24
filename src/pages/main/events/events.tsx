import styles from './events.module.css'
import EventCard from './event-card'
import { IoIosSearch } from 'react-icons/io'

interface Event {
  image: string
  text: string
  link: string
}

const events: Event[] = [
  {
    image: '/placeholder1.jpg',
    text: '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    link: '/event1',
  },
  {
    image: '/placeholder2.jpg',
    text: '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    link: '/event2',
  },
]

export default function EventsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мероприятия</h1>
        <div className={styles.searchWrapper}>
          <IoIosSearch className={styles.icon} />
          <input className={styles.search} type='text' placeholder='Поиск мероприятий' />
        </div>
      </div>
      <div className={styles.events}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  )
}
