import React, { Component } from "react";
import TodoList from "./components/TodoList";

/**
 * @description Test priavte, public access
 * 
 * @console
 * App.js:5 undefined
 * App.js:7 public access
 * 
 * @conclusion
 * 값에 직접 접근이 되므로 전역변수는 private 하게 사용할 수 없다.
 */
var md = new TodoList();
console.log(md.privateData);
md.privateData = "public access";
console.log(md.privateData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
