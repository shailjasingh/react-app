import React, { Component } from 'react';
import Todolist from './Todolist';
import ShowList from './ShowList';

class App extends Component {
  constructor() {
    super()
    this.state = {value: '', list: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);    
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.state.list.push(this.state.value)
    this.setState({list: this.state.list});
    event.preventDefault();
  }

  handleDelete(id){
    alert("ss");
    debugger
    this.setState({list: this.list.filter(el => el != id )})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value = {this.state.value} onChange={this.handleChange}  />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ShowList list= {this.state.list}  deleteRow = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
