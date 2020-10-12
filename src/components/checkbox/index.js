import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { id, isChecked, onChange } = props;
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={isChecked || false}
        onChange={onChange}
        id={id}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
