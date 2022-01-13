import React from "react";
import "./API.css";
import CustApi from "./NewApi/CustApi";

class Api extends React.Component {
  constructor() {
    super();
    this.setNumber = this.setNumber.bind(this);
    this.check = this.check.bind(this);
    this.NewContent = this.NewContent.bind(this);
  }

  state = {
    NumberofPeople: 10,
    showComponet: false,
  };

  setNumber(event) {
    var x = event.target.value;
    this.setState({ NumberofPeople: x });
    this.setState({ showComponet: false });
  }

  check() {
    this.setState({ showComponet: true });
  }

  NewContent() {
    if (this.state.showComponet) {
      return <CustApi number={this.state.NumberofPeople} />;
    } else {
      return <div> Not Yet Selected </div>;
    }
  }

  render() {
    return (
      <div className="API">
        <div className="NoP">
          <input
            type="number"
            value={this.state.NumberofPeople}
            id="N"
            onInput={this.setNumber}
          ></input>
          <label for="N">Number of people</label>
          <button type="button" onClick={this.check}>
            Search
          </button>
        </div>
        <div>{this.NewContent()}</div>
      </div>
    );
  }
}

export default Api;
