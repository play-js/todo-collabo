import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Play JS",
      todo: "",
      // todos: [],
    };  
  }

  onClickPlusButton = (e) => {
    this.setState({ todo: this.state.input});
  }

  onChangeInput = (e) => {
  	this.setState( {input: e.target.value} );
  }

  render() {
    return (
      <div>
        <input onChange={this.onChangeInput} value={this.state.input}/>
        <button onClick={this.onClickPlusButton}>+</button>
        <ul>
          <li>{this.state.todo}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;