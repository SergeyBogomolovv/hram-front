import { Link } from 'react-router'
import './header.module.css'

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src='{{ MEDIA_URL }}church1.png' alt='' className='logo_img' width='30' height='30' />
      </Link>
      <nav>
        <Link to='/'>Кружки</Link>
        <Link to='/'>Расписание</Link>
        <Link to='/'>О нас</Link>
        <Link to='/'>Регистрация</Link>
      </nav>
    </header>
  )
}
