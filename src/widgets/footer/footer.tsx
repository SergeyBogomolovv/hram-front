import styles from './footer.module.css'
import { BsTelegram } from 'react-icons/bs'
import { SiVk } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h4>О школе</h4>
          <ul>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Информация</h4>
          <ul>
            <li>Условия использования</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Социальные сети</h4>
          <div className={styles.socials}>
            <BsTelegram size={32} />
            <SiVk size={32} />
          </div>
        </section>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 Воскресная школа. Все права защищены.</p>
      </div>
    </footer>
  )
}
