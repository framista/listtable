import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { setTableRowsPerPage, setTablePage } from '../../redux/table/actions';
import { setStartEndTaskForPage } from '../../utils/tableTask';

const TablePagination = (props) => {
  const {
    rowsPerPage,
    page,
    taskAmount,
    setTableRowsPerPage,
    setTablePage,
  } = props;
  const { startTaskNumber, endTaskNumber } = setStartEndTaskForPage(
    taskAmount,
    page,
    rowsPerPage
  );
  const handlePrevPage = () => {
    if (startTaskNumber > rowsPerPage) {
      setTablePage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (endTaskNumber < taskAmount) {
      setTablePage(page + 1);
    }
  };
  return (
    <tr className="table-pagination">
      <td colSpan="4">
        <div className="table-pagination__content">
          <p className="table-pagination__p">Rows per page:</p>
          <select
            className="table-pagination__select"
            onChange={(e) => setTableRowsPerPage(parseInt(e.target.value, 10))}
            value={rowsPerPage}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
          <p className="table-pagination__p">
            {startTaskNumber}-{endTaskNumber} of {taskAmount}
          </p>
          <div
            onClick={handlePrevPage}
            className="table-pagination__icon table-pagination__icon--prev"
          >
            <GrPrevious />
          </div>
          <div onClick={handleNextPage} className="table-pagination__icon">
            <GrNext />
          </div>
        </div>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => ({
  rowsPerPage: state.table.rowsPerPage,
  page: state.table.page,
  taskAmount: state.tasks.length,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setTableRowsPerPage: (rowsAmount) =>
      dispatch(setTableRowsPerPage(rowsAmount)),
    setTablePage: (page) => dispatch(setTablePage(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
