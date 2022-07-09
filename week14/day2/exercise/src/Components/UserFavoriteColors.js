import React, { Component } from "react";

class UserFavoriteColors extends Component {
  render() {
    return (
      <div>
        {this.props.animals.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default UserFavoriteColors;
