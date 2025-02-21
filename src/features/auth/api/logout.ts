import { ACCESS_TOKEN_KEY } from '@/shared/constants';

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
