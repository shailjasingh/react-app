import React, { Component } from 'react';

class ShowList extends Component {

  constructor() {
    super()
    this.state = {edit_value: '', list: [], mode: 'view'};
    this.handleEditChange = this.handleEditChange.bind(this); 
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleEditChange(event){
    this.setState({edit_value: event.target.value});
  }

  handleEditSubmit(event){

  }

  render() {
    console.log(this.props)
    if(this.props.list.mode === 'view') {
      return (
        <div className="ShowList">
          <div className="header">
            <ul>
              {this.props.list.list.map(item => (
                <div>
                  <li key={item}>{item}</li>
                  <button type= "button" onClick = {() => this.props.deleteRow(item)}>Delete</button>
                  <button type= "button" onClick = {() => this.props.editRow(item) }>Edit</button>
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
                  <li key={item}>{item}</li>
                  <form onSubmit={this.handleEditSubmit}>
                    <label>
                      Name:
                      <input type="text" value = {this.state.value} onChange = {this.handleEditChange}  />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                  <button type= "button" onClick = {() => this.props.deleteRow(item)}>Delete</button>
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
