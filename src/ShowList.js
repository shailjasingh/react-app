import React, { Component } from 'react';

class ShowList extends Component {
  render() {
    return (
      <div className="ShowList">
        <div className="header">
          <ul>
            {this.props.list.map(item => (
              <div>
                <li key={item}>{item}</li>
                <button type= "button" onClick = {this.props.deleteRow(item)}/ >
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShowList;
