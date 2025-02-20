import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Box,
  Typography,
  FormHelperText,
  TextField,
} from '@mui/material';
import { LoginFormInputs, loginSchema } from '../model/schemas';
import styles from './auth.module.css';
import CustomLink from '@/shared/ui/link';
import { useLogin } from '../api/login';

export function LoginForm() {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { mutate: login } = useLogin(form);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => login(data))}
      className={styles.form}
    >
      <Typography variant="h5" align="center">
        Вход в аккаунт
      </Typography>
      <Box>
        <TextField
          label="Email"
          type="email"
          fullWidth
          {...register('username')}
          error={!!errors.username}
        />
        {errors.username && (
          <FormHelperText error>{errors.username.message}</FormHelperText>
        )}
      </Box>
      <Box>
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          {...register('password')}
          error={!!errors.password}
        />
        {errors.password && (
          <FormHelperText error>{errors.password.message}</FormHelperText>
        )}
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ fontWeight: 'bold' }}
      >
        Войти
      </Button>
      <CustomLink to={'/register'}>
        У вас еще нету аккаунта? Регистрация
      </CustomLink>
    </Box>
  );
}
