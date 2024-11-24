import { IoIosSearch } from 'react-icons/io'
import styles from './search-input.module.css'

export default function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.searchContainer}>
      <IoIosSearch className={styles.icon} />
      <input {...props} type='text' className={styles.input} />
    </div>
  )
}
