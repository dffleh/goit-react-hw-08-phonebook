import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/operations';

import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        type="button"
        variant="outlined"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};
