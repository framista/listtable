import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-dark">
      <p className="mt-5 display-3 text-center font-weight-bold">404</p>
      <h1 className="my-5  text-center text-uppercase">Site not found</h1>
      <h3 className="text-center">
        Unfortunately the website is not available.
      </h3>
      <div className="mt-5 text-center">
        <Link to="/">
          <Button className="task__btn task__btn--primary">Home Page</Button>
        </Link>
      </div>{' '}
    </Container>
  );
};

export default NotFoundPage;
