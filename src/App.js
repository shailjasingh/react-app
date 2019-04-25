import React, { Component } from 'react';
import Todolist from './Todolist';
import ShowList from './ShowList';

class App extends Component {
  constructor() {
    super()
    this.state = {value: '', list: [], mode: 'view'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);    
  }
  
  handleChange(event){
    console.log('==========' + event.target.value + '============');
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.state.list.push(this.state.value)
    this.setState({list: this.state.list});
    this.setState({mode: 'view'});
    event.preventDefault();
  }

  handleDelete(id){
    this.setState({list: this.state.list.filter(el => el != id )})
  }

  handleEdit(id){
    this.setState({mode: 'edit'});
  }

  render() {
    return (
      <div className="App">
        <h2>ToDo App </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value = {this.state.value} onChange={this.handleChange}  />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ShowList list= {this.state}  deleteRow = {this.handleDelete} editRow = {this.handleEdit} saveData = {this.handleSubmit} onChange = {this.handleChange} />
      </div>
    );
  }
}

export default App;
