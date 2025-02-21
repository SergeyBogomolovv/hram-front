import { LoginForm } from '@/features/auth';
import styles from './auth.module.css';

export default function LoginPage() {
  return (
    <main className={`${styles.container} container`}>
      <LoginForm />
    </main>
  );
}
