import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Play JS",
    };  
  }

  // state = {
  //   input: "",
  // };

  render() {
    return (
      <div>
        <input />
        <button>+</button>
        <ul>
          <li>{this.state.input}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;