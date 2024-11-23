import { Outlet } from 'react-router'
import Header from '../widgets/header'
import Footer from '../widgets/footer'
import styles from './layout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
