import React from "react";
var newState = 898908;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Play JS",
      todos: []
    };

    this.newState = [];
  }

  // getState = () => newState;
  get myState() {
    return newState;
  }

  onClickPlusButton = e => {
    // let newState = [...this.state.todos];
    const { input } = this.state;

    if (input.trim() === "") {
      return;
    }

    this.newState.push(this.state.input);
    this.setState({ todos: this.newState });

    this.setState({ input: "" });
    // DOM.focus();
  };

  onClickMinusButton = e => {
    this.newState = this.newState.filter(
      (data, i) => +e.target.getAttribute('index') !== i
    );

    this.setState({ todos: this.newState });

    console.log(this.state.todos);
  };

  onChangeInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.onChangeInput} value={this.state.input} />
        <button onClick={this.onClickPlusButton}>+</button>
        <ul>
          {// this.state.todos.map(function(data, index) {
            //   return <li key={index}>{data}</li>
            // })
            this.state.todos.map((data, index) => (
              <li key={index}>
                {data}
                <button onClick={this.onClickMinusButton} index={index}>
                  -
              </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
