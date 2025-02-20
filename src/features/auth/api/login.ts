import { $api } from '@/shared/lib/api';
import { useMutation } from '@tanstack/react-query';
import { accessTokenReponseSchema, LoginFormInputs } from '../model/schemas';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ACCESS_TOKEN_KEY } from '@/shared/constants';

export const useLogin = (form: UseFormReturn<LoginFormInputs>) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (fields: LoginFormInputs) => {
      const { data } = await $api.post('/login', fields);
      return accessTokenReponseSchema.parse(data);
    },
    onSuccess: async (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      navigate(0);
    },
    onError: () => {
      form.setError('username', { message: 'Неверные данные' });
      form.setError('password', { message: 'Неверные данные' });
    },
  });
};
