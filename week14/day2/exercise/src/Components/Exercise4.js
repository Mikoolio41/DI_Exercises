import React, { Component } from "react";
import "./Exercise4.css";
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise4 extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1 style={style_header}>This is a header</h1>
        <p className="para">This is a paragraph</p>
        <a href="./Exercise4.js">This is a link</a>
        <form>
          <h3>This is a form</h3>
          <label>
            Enter your name
            <br />
          </label>
          <input type={"text"}></input>
          <button type="submit">Submit</button>
        </form>
        <h3>Here is an image</h3>
        <img
          src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qSZMxLOAsEPF6tXGFD83n/b0914152c722de321e278683a844fd10/ac-brotherhood.jpg?imwidth=360"
          alt="assassins creed"
        />
        <ul>
          <h4>This is a list</h4>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise4;
