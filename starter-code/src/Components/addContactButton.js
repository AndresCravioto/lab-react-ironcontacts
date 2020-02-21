import React, { Component } from "react";

class AddContactButton extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <button onClick={this.props.addFunction}>
          Add Random Contact
      </button>
    );
  }
}

export default AddContactButton;