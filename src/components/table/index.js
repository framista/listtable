import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableItem from '../tableItem';
import TableHeader from '../tableHeader';
import TablePagination from '../tablePagination';
import './style.css';

const TableElement = (props) => {
  const { tasks, order, orderBy, page } = props;
  const [tasksToShow, setTasksToShow] = useState(tasks);

  useEffect(() => {
    const compareAsc = (a, b) => {
      if (orderBy !== 'done') {
        if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) return -1;
        if (a[orderBy].toLowerCase() > b[orderBy].toLowerCase()) return 1;
        return 0;
      } else {
        return a[orderBy] === b[orderBy] ? 0 : a[orderBy] ? -1 : 1;
      }
    };
    tasks.sort((a, b) => compareAsc(a, b));
    if (order === 'asc') {
      tasks.reverse();
    }
    setTasksToShow(tasks);
  }, [order, orderBy, tasks]);

  return (
    <Table responsive className="task__table">
      <thead className="table__thead">
        <TableHeader />
      </thead>
      <tbody>
        {tasksToShow.map((task) => (
          <TableItem key={task.id} task={{ ...task }} />
        ))}
        <TablePagination />
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  tasks: [...state.tasks],
  page: state.table.page,
  order: state.table.order,
  orderBy: state.table.orderBy,
});

export default connect(mapStateToProps)(TableElement);
