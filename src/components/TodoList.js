import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Play JS",
    };  
  }

  onClickPlusButton = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div>
        <input />
        <button onClick={this.onClickPlusButton}>+</button>
        <ul>
          <li>{this.state.input}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;