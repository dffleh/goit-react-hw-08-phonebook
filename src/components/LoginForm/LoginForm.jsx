import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
      </label>
      <label>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
      </label>

      <Button type="submit" variant="contained">
        LogIn
      </Button>
    </form>
  );
};
