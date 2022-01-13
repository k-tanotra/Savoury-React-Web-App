import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "TopNav",
    };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ class: "TopNav2" });
    } else {
      this.setState({ class: "TopNav" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className={this.state.class}>
        <div className="Left">
          <a href="#">
            <span className="l-link">Home</span>
          </a>
          <a href="#">
            <span className="l-link">Recipes</span>
          </a>
          <a href="#">
            <span className="l-link">Basics</span>
          </a>
          <a href="#">
            <span className="l-link">About</span>
          </a>
          <a href="#">
            <span className="l-link">Event</span>
          </a>
          <a href="#">
            <span className="l-link">Cookbook</span>
          </a>
          <a href="#">
            <span className="l-link">Store</span>
          </a>
          <a href="#">
            <span className="l-link">Health</span>
          </a>
        </div>
        <div className="Right">
          <i className="fa fa-youtube-play"></i>
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
