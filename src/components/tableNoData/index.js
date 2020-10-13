import React from 'react';
import './style.css';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

const TableNoData = () => (
  <tr>
    <td colSpan="4" className="table-no-data">
      <div className="table-no-data__content">
        <p className="table-no-data__content__p">No task to do</p>
        <div className="table-no-data__icon">
          <HiOutlineEmojiHappy />
        </div>
      </div>
    </td>
  </tr>
);
export default TableNoData;
