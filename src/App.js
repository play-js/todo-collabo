import React, { Component } from "react";
import TodoList from "./components/TodoList";

var md = new TodoList();
console.log(md.newState);
console.log(md.getState());
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />

        {console.log(TodoList.newState)}
      </div>
    );
  }
}

export default App;
