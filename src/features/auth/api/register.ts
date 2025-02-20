import { $api } from '@/shared/lib/api';
import { useMutation } from '@tanstack/react-query';
import { RegisterFormInputs } from '../model/schemas';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router';

export const useRegister = (form: UseFormReturn<RegisterFormInputs>) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (fields: RegisterFormInputs) => {
      await $api.post('/register', fields);
    },
    onSuccess: () => {
      form.reset();
      navigate('/login');
    },
    onError: () => {
      form.setError('root', { message: 'Произошла непредвиденная ошибка' });
    },
  });
};
