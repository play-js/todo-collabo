import React, { Component } from "react";
import TodoList from "./components/TodoList";

var md = new TodoList();
console.log(md.newState);
// console.log(md.getState());
console.log(md.myState);
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
