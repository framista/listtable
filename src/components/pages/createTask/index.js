import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../../../redux/tasks/actions';
import { withRouter, Link } from 'react-router-dom';

const CreateTask = (props) => {
  const { addTask } = props;
  const [errorName, setErrorName] = useState(false);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    name: '',
    priority: 'Low',
    done: false,
  });

  const onInputChange = (e) => {
    setNewTask({ ...newTask, name: e.target.value });
    setErrorName(validateName(e.target.value));
  };
  const validateName = (value) => value.trim().length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotValid = validateName(newTask.name);
    setErrorName(isNotValid);
    if (!isNotValid) {
      addTask(newTask);
      props.history.push('/');
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className="task-form">
        <h1 className="mb-4">Create a new task</h1>
        <Form.Group controlId="validationCustomTaskname">
          <Form.Label>Task name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            value={newTask.name}
            onChange={onInputChange}
          />
          {errorName && (
            <small className="text-danger">Please enter a task name.</small>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Done"
            checked={newTask.done}
            onChange={() => setNewTask({ ...newTask, done: !newTask.done })}
          />
        </Form.Group>
        <div className="mt-3">
          <Link to="/">
            <Button variant="light" className="mr-3 task__btn">
              Home Page
            </Button>
          </Link>
          <Button type="submit" className="task__btn task__btn--primary">
            Add task
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(CreateTask));
