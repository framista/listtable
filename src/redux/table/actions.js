import { TABLE_SET_PAGE, TABLE_SET_ORDER } from '../types';

export const setTablePage = (page) => ({
  type: TABLE_SET_PAGE,
  payload: page,
});

export const setTableOrder = (order, orderBy) => ({
  type: TABLE_SET_ORDER,
  payload: { order, orderBy },
});
