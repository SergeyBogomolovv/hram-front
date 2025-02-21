import { logout } from '@/features/auth';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function LogoutButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        logout();
        navigate(0);
      }}
    >
      Выйти
    </Button>
  );
}
