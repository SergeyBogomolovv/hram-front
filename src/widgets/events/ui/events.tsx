import styles from './events.module.css';
import EventCard from '@/widgets/events/ui/event-card';
import { Input, InputAdornment } from '@mui/material';
import { motion } from 'motion/react';
import { MdSearch } from 'react-icons/md';
import { useGetEvents } from '../api/get-events';

const MotionCard = motion(EventCard);

export function EventsSection() {
  const { data } = useGetEvents();
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мероприятия</h1>
        <Input
          placeholder="Поиск мероприятий"
          startAdornment={
            <InputAdornment position="start">
              <MdSearch size={24} />
            </InputAdornment>
          }
        />
      </div>
      <div className={styles.events}>
        {data?.map((event, index) => (
          <MotionCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            href={`/events/${event.id}`}
            content={event.content}
            image={event.nameImg}
          />
        ))}
      </div>
    </section>
  );
}
