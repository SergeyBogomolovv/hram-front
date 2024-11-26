import HeroSection from './hero/hero'
import SlidesSection from './slides/slides'
import { EventsSection } from '@/widgets/events'
import FaqSection from './faq/faq'
import styles from './main.module.css'

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <div className={styles.container}>
        <SlidesSection />
        <EventsSection />
        <FaqSection />
      </div>
    </main>
  )
}
