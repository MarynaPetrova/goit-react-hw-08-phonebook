import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/user/userThunk';

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleOnSubmit = evt => {
    evt.preventDefault();
    setError('');

    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        // Handle successful registration here (e.g., redirect)
      })
      .catch(error => setError('Failed to register. Please check your input.'));
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Button bg="black" variant="dark" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
