import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableItem from '../tableItem';
import TableHeader from '../tableHeader';
import './style.css';

const TableElement = (props) => {
  const { tasks } = props;
  return (
    <Table responsive>
      <thead className="thead-dark">
        <TableHeader />
      </thead>
      <tbody style={{ borderBottom: '1px solid #000' }}>
        {tasks.map((task) => (
          <TableItem key={task.id} task={{ ...task }} />
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  tasks: [...state.tasks],
});

export default connect(mapStateToProps)(TableElement);
