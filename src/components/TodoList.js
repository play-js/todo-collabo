import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Play JS",
      todos: [],
    };
  }

  onClickPlusButton = (e) => {
    this.state.todos.push(this.state.input);
    console.log(this.state.todos);

    
  }

  onChangeInput = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.onChangeInput} value={this.state.input} />
        <button onClick={this.onClickPlusButton}>+</button>
        <ul>
          {
            // this.state.todos.map(function(data, index) {
            //   return <li key={index}>{data}</li>
            // })
            this.state.todos.map((data, index) => <li key={index}>{data}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;