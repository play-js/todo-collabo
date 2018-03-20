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
    //this.state.input

  }

  onChangeInput = (e) => {
  	console.log(e.target.value);
  	this.setState( {input: e.target.value} );
  }

  render() {
    return (
      <div>
        <input onChange={this.onChangeInput} value={this.state.input}/>
        <button onClick={this.onClickPlusButton}>+</button>
        <ul>
          <li>{this.state.input}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;