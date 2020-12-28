import * as action from "../constants";
import { load } from "redux-localstorage-simple";

let TASKS = load({ namespace: "todo-app" });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  };
}

// const TASKS = [
//   {
//     id: 1,
//     text: "Learn ReactJS",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Learn Redux",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Learn React Router",
//     isCompleted: false,
//   },
// ];

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case action.ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];
    case action.REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);
    case action.COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

    default:
      return state;
  }
};

export default tasks;
