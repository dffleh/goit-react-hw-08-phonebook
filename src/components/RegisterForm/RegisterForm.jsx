import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Button, TextField } from '@mui/material';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off ">
      <Label>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
        />
      </Label>
      <Label>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
      </Label>
      <Label>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
      </Label>
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};
