import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    margin: '20px',
    border: 'none',
    boxShadow: '0px 8px 20px 5px #ddd',
  },
};

Modal.setAppElement('#root');

const ModalDelete = (props) => {
  const { name, isOpen, onClose, onDelete } = props;
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h4>
        Are you sure you want to delete this task:{' '}
        <span className="font-italic">{name}</span>
      </h4>
      <div className="mt-5 d-flex justify-content-end">
        <Button
          className="mr-4 px-5 task__btn task__btn--primary"
          onClick={onDelete}
        >
          Yes
        </Button>
        <Button variant="light" className="task__btn" onClick={onClose}>
          No
        </Button>
      </div>
    </Modal>
  );
};

ModalDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ModalDelete;
