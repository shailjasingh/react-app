import React, { Component } from 'react';

class ShowList extends Component {

  constructor() {
    super()
    this.state = {
      editValue: '',
      list: [],
      mode: 'view',
      seletedId: '',
    };
    this.handleEditChange = this.handleEditChange.bind(this); 
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      editValue: event.target.value
    })
  }

  handleEditChange(id){
    this.setState({seletedId: id }, this.props.editRow());
  }

  handleEditSubmit(event){
    event.preventDefault();
    debugger
    // get value form state seleted Item value and ID
    // then call the parent method i.e abc(Id, value)

  }

  render() {
    console.log(this.props)
    const { seletedId, editValue } = this.state;
    if(this.props.list.mode === 'view') {
      return (
        <div className="ShowList">
          <div className="header">
            <ul>
              {this.props.list.list.map(item => (
                <div>
                  <li key={item.id}>{item.value}</li>
                  <button type= "button" onClick = {() => this.props.deleteRow(item.id)}>Delete</button>
                  <button type= "button" onClick = {() => this.handleEditChange(item.id) }>Edit</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
    }else{
      return (
        <div className="ShowList">
          <div className="header">
            <ul>
              {this.props.list.list.map(item => (
                <div>
                  <li key={item.id}>{item.value}</li>
                  <form onSubmit={this.handleEditSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={editValue}
                        onChange={this.handleChange}
                      />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                  <button type= "button" onClick = {() => this.props.deleteRow(item.id)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default ShowList;
