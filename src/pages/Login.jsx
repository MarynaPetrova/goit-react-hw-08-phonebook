import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user/userThunk';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error('Invalid field');
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setError('');

    const formData = { email, password };
    dispatch(loginThunk(formData))
      .unwrap()
      .then(() => {
        // Handle successful login here (e.g., redirect)
      })
      .catch(error => setError('Failed to log in. Please check your credentials.'));
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit} onChange={handleChange}>
        {error && <div className="alert alert-danger">{error}</div>}
        {/* Email and password fields here */}
        <Button bg="black" variant="dark" type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;
