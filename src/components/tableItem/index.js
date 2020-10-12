import React, { useState } from 'react';
import './style.css';
import Checkbox from '../checkbox';
import { BsFillTrashFill } from 'react-icons/bs';

const TableItem = () => {
  const [taskFinished, setTaskFinished] = useState(false);

  return (
    <tr className="table-item">
      <td className="table-item__col--name">Take out the trash</td>
      <td className="table-item__col--priority">Medium</td>
      <td>
        <div className="table-item__checkbox">
          <Checkbox
            id={1}
            isChecked={taskFinished}
            onChange={() => setTaskFinished((prev) => !prev)}
          />
        </div>
      </td>
      <td className="table-item__col--delete">
        <div
          className="table-item__icon--delete"
          onClick={() => console.log('delete me')}
        >
          <BsFillTrashFill />
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
