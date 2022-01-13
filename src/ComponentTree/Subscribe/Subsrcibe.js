import React from "react";
import "./Subscribe.css";

class Subcribe extends React.Component {
  render() {
    return (
      <div className="Subscribe">
        <p>Subscribe</p>
        <p>Sign up with your email address to receive news and updates.</p>
        <div className="Inputs">
          <input type="text" name="fname" placeholder="First Name"></input>
          <input type="text" name="lname" placeholder="Last Name"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <button>Sign Up</button>
        </div>
        <p>Your Email will not be shared</p>
      </div>
    );
  }
}

export default Subcribe;
