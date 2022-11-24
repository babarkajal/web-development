import { combineReducers } from "redux";

export const todoInitialData = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

const todoReducer = (state = todoInitialData, action) => {
  console.log("IN REDUCER -------");
  switch (action.type) {
    case "todo/add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todo/delete":
      return {
        ...state,
        todos: state.todos.filter((val, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

//COMBINE REDUCERS TO MAKE THEM AS A ROOT REDUCER
const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
