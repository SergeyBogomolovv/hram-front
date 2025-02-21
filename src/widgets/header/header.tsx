import { Link } from 'react-router';
import { IoMenu } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './header.module.css';
import CustomLink from '@/shared/ui/link';
import { isAuthenticated } from '@/features/auth';
import LogoutButton from './logout-btn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isauth = isAuthenticated();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <Link to="/" className={styles.logo}>
        <h1>Культурный центр Наследие</h1>
      </Link>

      <nav className={styles.desktopNav}>
        <CustomLink to="/sections">Кружки</CustomLink>
        <CustomLink to="/schedule">Расписание</CustomLink>
        <CustomLink to="/about">О нас</CustomLink>
        {isauth ? <LogoutButton /> : <CustomLink to="/login">Вход</CustomLink>}
      </nav>

      <button className={styles.menuButton} onClick={toggleMenu}>
        <IoMenu size={32} />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            onClick={toggleMenu}
            className={styles.overlayMenu}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <nav className={styles.mobileNav}>
              <CustomLink
                to="/sections"
                sx={{ fontSize: '1.5rem', color: 'white' }}
              >
                Кружки
              </CustomLink>
              <CustomLink
                to="/schedule"
                sx={{ fontSize: '1.5rem', color: 'white' }}
              >
                Расписание
              </CustomLink>
              <CustomLink
                to="/about"
                sx={{ fontSize: '1.5rem', color: 'white' }}
              >
                О нас
              </CustomLink>
              {isauth ? (
                <LogoutButton />
              ) : (
                <CustomLink
                  to="/login"
                  sx={{ fontSize: '1.5rem', color: 'white' }}
                >
                  Вход | Регистрация
                </CustomLink>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
