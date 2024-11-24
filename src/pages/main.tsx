import styles from './main.module.css'

export default function MainPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1>
            Лучшая школа
            <br /> для лучшего мира
          </h1>
          <p>
            Здесь мы собираемся каждое воскресенье, чтобы учиться, творить и веселиться, создавая
            уникальные рукодельные проекты. Наши занятия помогут детям развить творческие
            способности, моторику рук и воображение.
          </p>
        </div>
      </section>
    </main>
  )
}
