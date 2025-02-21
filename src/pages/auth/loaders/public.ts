import { redirect } from 'react-router';
import { isAuthenticated } from '@/features/auth';

export const publicLoader = () => {
  const authenticated = isAuthenticated();
  if (authenticated) {
    throw redirect('/');
  }
  return null;
};
