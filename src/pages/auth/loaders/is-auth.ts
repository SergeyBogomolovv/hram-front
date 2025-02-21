import { ACCESS_TOKEN_KEY } from '@/shared/constants';

export const isAuthenticated = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return !!token;
};
