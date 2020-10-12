import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-dark">
      <p className="mt-5 display-3 text-center font-weight-bold">404</p>
      <h1 className="my-5  text-center text-uppercase">Strona niedostępna</h1>
      <h3 className="text-center">
        Niestety podany przez Ciebie adres strony nie jest dostępny
      </h3>
      <div className="mt-5 text-center">
        <Link
          to="/"
          className="text-primary btn btn-primary text-light text-uppercase"
        >
          Strona główna
        </Link>
      </div>{' '}
    </Container>
  );
};

export default NotFoundPage;
