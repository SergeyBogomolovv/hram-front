import { Outlet } from 'react-router';
import Header from '@/widgets/header/header';
import Footer from '@/widgets/footer/footer';
import styles from './main.module.css';

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
