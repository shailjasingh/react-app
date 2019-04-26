import React, { Component } from 'react';
import Todolist from './Todolist';
import ShowList from './ShowList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      list: [],
      mode: 'view',
      selectedItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  
  handleChange(event){
    console.log('==========' + event.target.value + '============');
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const { value, list } = this.state;
    const obj = {id: new Date().getSeconds(), value }
    const allList = list.concat(obj);
    this.setState({list: allList, value: ''});
    this.setState({mode: 'view'});
  }

  handleDelete(id){
    this.setState({list: this.state.list.filter(el => el.id != id )})
  }

  handleEdit(item){
    this.setState({mode: 'edit' });
  }
  // abc(id, value) {
    // 
  // }
  handleEditSubmit(id, value){

  }

  render() {
    const { selectedItem } = this.state;
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
        <ShowList
          list= {this.state}
          deleteRow = {this.handleDelete}
          editRow = {this.handleEdit}
          saveData = {this.handleSubmit}
          onChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default App;
