import { Link } from 'react-router'
import { MdChurch } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './header.module.css'
import CustomLink from '@/shared/ui/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header>
      <Link to='/' className={styles.logo}>
        <MdChurch size={32} />
      </Link>

      <nav className={styles.desktopNav}>
        <CustomLink to='/'>Кружки</CustomLink>
        <CustomLink to='/schedule'>Расписание</CustomLink>
        <CustomLink to='/about'>О нас</CustomLink>
        <CustomLink to='/login'>Вход | Регистрация</CustomLink>
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
              <CustomLink to='/'>Кружки</CustomLink>
              <CustomLink to='/schedule'>Расписание</CustomLink>
              <CustomLink to='/about'>О нас</CustomLink>
              <CustomLink to='/login'>Вход | Регистрация</CustomLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
