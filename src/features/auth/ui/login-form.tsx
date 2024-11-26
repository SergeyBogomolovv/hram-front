import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Button, Box, Typography, FormHelperText } from '@mui/material'
import { LoginFormInputs, loginSchema } from '../model/schemas'
import styles from './auth.module.css'
import CustomLink from '@/shared/ui/link'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    //TODO: implement login
    console.log('Form Data:', data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Typography variant='h5' align='center'>
        Вход в аккаунт
      </Typography>
      <Box>
        <Input
          placeholder='Email'
          type='email'
          fullWidth
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
      </Box>
      <Box>
        <Input
          placeholder='Пароль'
          type='password'
          fullWidth
          {...register('password')}
          error={!!errors.password}
        />
        {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
      </Box>

      <Button type='submit' variant='contained' color='primary' fullWidth>
        Войти
      </Button>
      <CustomLink to={'/register'}>У вас еще нету аккаунта? Регистрация</CustomLink>
    </Box>
  )
}
