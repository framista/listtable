import React from 'react';
import { Table } from 'react-bootstrap';
import TableItem from '../tableItem';
import TableHeader from '../tableHeader';
import './style.css';

const TableElement = () => {
  return (
    <Table responsive>
      <thead className="thead-dark">
        <TableHeader />
      </thead>
      <tbody style={{ borderBottom: '1px solid #000' }}>
        <TableItem />
        <TableItem />
      </tbody>
    </Table>
  );
};

export default TableElement;
