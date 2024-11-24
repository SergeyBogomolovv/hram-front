import HeroSection from './hero/hero'
import SlidesSection from './slides/slides'
import styles from './main.module.css'
import EventsSection from './events/events'
import FaqSection from './faq/faq'

export default function MainPage() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <SlidesSection />
      <EventsSection />
      <FaqSection />
    </main>
  )
}
