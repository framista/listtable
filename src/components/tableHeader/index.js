import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import './style.css';
import { setTableOrder } from '../../redux/table/actions';

const TableHeader = (props) => {
  const { setOrder } = props;
  const [tableHeaderContent, setTableHeaderContent] = useState([
    {
      name: 'Task name',
      active: false,
      order: 'desc',
      visible: true,
      id: 'name',
    },
    {
      name: 'Priority',
      active: true,
      order: 'desc',
      visible: true,
      id: 'priority',
    },
    { name: 'Done', active: false, order: 'desc', visible: true, id: 'done' },
    { name: '', active: false, order: 'desc', visible: false, id: 'delete' },
  ]);

  const changeOrder = (colItem) => {
    setTableHeaderContent(
      tableHeaderContent.map((el) => {
        if (el.id === colItem.id) {
          el.order = colItem.order === 'desc' ? 'asc' : 'desc';
          el.active = true;
          setOrder(el.order, colItem.id);
        } else {
          el.active = false;
        }
        return el;
      })
    );
  };

  return (
    <tr>
      {tableHeaderContent.map((colItem) => {
        return (
          <th key={colItem.id}>
            {colItem.visible && (
              <div className="table-header__th">
                <p className="table-header__p">{colItem.name}</p>
                <div
                  className="table-header__icon"
                  onClick={() => changeOrder(colItem)}
                >
                  {colItem.order === 'desc' ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowUp />
                  )}
                </div>
              </div>
            )}
          </th>
        );
      })}
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrder: (order, orderBy) => dispatch(setTableOrder(order, orderBy)),
  };
};
export default connect(null, mapDispatchToProps)(TableHeader);
