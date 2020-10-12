import { TASK_ADD, TASK_DELETE, TASK_TOOGLE_DONE } from '../types';

export const addTask = (task) => ({
  type: TASK_ADD,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: TASK_DELETE,
  payload: taskId,
});

export const toogleDoneTask = (taskId) => ({
  type: TASK_TOOGLE_DONE,
  payload: taskId,
});
