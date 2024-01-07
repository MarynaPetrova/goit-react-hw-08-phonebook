import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/user/userSelect';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoUser from 'components/InfoUser/InfoUser';

const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/goit-react-hw-08-phonebook/contacts">
            Phonebook
          </Navbar.Brand>
          {!user && (
            <Nav className="me-auto">
              {token && (
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
          <InfoUser />
        </Container>
      </Navbar>
      <Container className="align-items-center d-flex flex-column justify-content-center">
        {user ? (
          <h1>Welcome {user.name} your contacts</h1>
        ) : (
          <h1>Welcome guest please login</h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;
