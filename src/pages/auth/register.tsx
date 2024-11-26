import { RegisterForm } from '@/features/auth'
import styles from './auth.module.css'

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <RegisterForm />
    </main>
  )
}
