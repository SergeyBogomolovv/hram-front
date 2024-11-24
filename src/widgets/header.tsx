import { Link, NavLink, NavLinkRenderProps } from 'react-router'
import { MdChurch } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLink = ({ isActive }: NavLinkRenderProps) =>
    isActive ? [styles.link, styles.activeLink].join(' ') : styles.link

  return (
    <header>
      <Link to='/' className={styles.logo}>
        <MdChurch size={32} />
      </Link>

      <nav className={styles.desktopNav}>
        <NavLink to='/' className={navLink}>
          Кружки
        </NavLink>
        <NavLink to='/schedule' className={navLink}>
          Расписание
        </NavLink>
        <NavLink to='/about' className={navLink}>
          О нас
        </NavLink>
        <NavLink to='/login' className={navLink}>
          Вход | Регистрация
        </NavLink>
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
              <NavLink to='/' className={navLink} onClick={toggleMenu}>
                Кружки
              </NavLink>
              <NavLink to='/schedule' className={navLink} onClick={toggleMenu}>
                Расписание
              </NavLink>
              <NavLink to='/about' className={navLink} onClick={toggleMenu}>
                О нас
              </NavLink>
              <NavLink to='/login' className={navLink} onClick={toggleMenu}>
                Вход | Регистрация
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
