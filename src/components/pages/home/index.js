import React from 'react';
import Table from '../../table';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Link to="/createTask">
        <Button className="task__btn task__btn--primary mb-5">Add task</Button>
      </Link>
      <Table />
    </Container>
  );
};

export default HomePage;
