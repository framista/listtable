import {
  TABLE_SET_PAGE,
  TABLE_SET_ORDER,
  TABLE_SET_ROWS_PER_PAGE,
} from '../types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_SET_PAGE:
      return { ...state, page: action.payload };
    case TABLE_SET_ORDER:
      return {
        ...state,
        page: 0,
        order: action.payload.order,
        orderBy: action.payload.orderBy,
      };
    case TABLE_SET_ROWS_PER_PAGE:
      return {
        ...state,
        page: 0,
        rowsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
