import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
})

export type LoginFormInputs = z.infer<typeof loginSchema>

export const registerSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email('Введите корректный email'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    passwordAgain: z.string(),
  })
  .refine((data) => data.password === data.passwordAgain, {
    message: 'Пароли должны совпадать',
    path: ['passwordAgain'],
  })

export type RegisterFormInputs = z.infer<typeof registerSchema>
