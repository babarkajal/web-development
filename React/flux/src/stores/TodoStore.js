import { EventEmitter } from "events";
import dispatcher from "../Dispatch/dispatcher";
/**
 ** TodoStore
 */
class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1212,
        title: "Complete Flux tutorial",
        complete: true,
      },
      {
        id: 12334,
        title: "Complete Router in react",
        complete: true,
      },
    ];
  }

  createTodo(data) {
    this.todos.push(data);
    this.emit("change");
  }
  deleteDoto(id) {
    this.todos = this.todos.filter((val, index) => index !== id);
    this.emit("change");
  }
  getAll() {
    return this.todos;
  }

  //handle all actions coming for this dispatcher
  handleActions(action) {
    console.log("TODOSTORE RECEIVED AN ACTION ", action);
    switch (action.type) {
      case "add-todo":
        this.createTodo(action.payload);
        break;
      case "delete-todo":
        this.deleteDoto(action.payload);
        break;

      case "fetch-todo":
        this.todos = [...this.todos, ...action.payload];
        this.emit("change");
        break;
    }
  }
}

const todoStore = new TodoStore();

//here binding is necessary because this method is called by register function
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;
