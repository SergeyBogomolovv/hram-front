import { LoginForm } from '@/features/auth'
import styles from './login-page.module.css'

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  )
}
