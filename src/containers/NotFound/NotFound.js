import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="conatiner">
        <span className="numer">4</span>
        <div className="circle">
          <div className="drops" />
          <div className="drops" />
          <div className="hand" />
          <div className="hand rgt" />
          <div className="holder">
            <div className="bob">
              <div className="nose" />
              <div className="face">
                <div className="mouth">
                  <div className="tongue" />
                </div>
              </div>
              <div className="ear" />
              <div className="ear rgt" />
              <div className="neck" />
            </div>
          </div>
        </div>
        <span className="numer">4</span>
      </div>
    );
  }
}

export default NotFound;
