import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="flex">
          <div>
              <img src={this.props.pictureUrl} width="50px">
              </img>
          </div>
          <div>
            <p>
              {this.props.name} 
            </p>
          </div>
          <div>
            <p>
                {this.props.popularity}
            </p>
          </div>
      </div>
    );
  }
}

export default Contact;