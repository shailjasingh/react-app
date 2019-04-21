import React, { Component } from 'react';

class ShowList extends Component {
  deleteRow(id){
    this.props.deleteRow(id);
  }

  render() {
    return (
      <div className="ShowList">
        <div className="header">
          <ul>
            {this.props.list.map(item => (
              <div>
                <li key={item}>{item}</li>
                <button type= "button" onClick = {this.deleteRow.bind(this, item)}>Delete</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShowList;
