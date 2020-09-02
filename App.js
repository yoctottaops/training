import React from "react";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./navigation/navigation";

export default function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, name: "Default todo", done: false },
  // ]);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
