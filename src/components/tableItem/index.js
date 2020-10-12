import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Checkbox from '../checkbox';
import { BsFillTrashFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { toogleDoneTask, deleteTask } from '../../redux/tasks/actions';
import ModalDelete from '../modalDelete';

const TableItem = (props) => {
  const { toogleDoneTask, deleteTask } = props;
  const { id, name, priority, done } = props.task;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    deleteTask(id);
    setModalIsOpen(false);
  };
  return (
    <Fragment>
      <tr className="table-item">
        <td className="table-item__col--name">{name}</td>
        <td className="table-item__col--priority">{priority}</td>
        <td>
          <div className="table-item__checkbox">
            <Checkbox
              id={id}
              isChecked={done}
              onChange={() => toogleDoneTask(id)}
            />
          </div>
        </td>
        <td className="table-item__col--delete">
          <div
            className="table-item__icon--delete"
            onClick={() => setModalIsOpen(true)}
          >
            <BsFillTrashFill />
          </div>
        </td>
      </tr>
      <ModalDelete
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onDelete={handleDelete}
        name={name}
      />
    </Fragment>
  );
};

TableItem.propTypes = {
  task: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    toogleDoneTask: (id) => dispatch(toogleDoneTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(TableItem);
