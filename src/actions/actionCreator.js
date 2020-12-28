import * as actions from "../constants";

export const addTask = (id, text, isCompleted) => ({
  type: actions.ADD_TASK,
  id,
  text,
  isCompleted,
});

export const removeTask = (id) => ({
  type: actions.REMOVE_TASK,
  id,
});

export const completeTask = (id) => ({
  type: actions.COMPLETE_TASK,
  id,
});

export const changeFilter = (activeFilter) => ({
  type: actions.CHANGE_FILTER,
  activeFilter,
});
