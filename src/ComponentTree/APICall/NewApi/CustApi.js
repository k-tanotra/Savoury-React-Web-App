import React from "react";
import "./CustApi.css";

class CustApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      NumberofPeople: this.props.number,
    };
    this.renderArray2 = this.renderArray2.bind(this);
  }

  async componentDidMount() {
    var x = "https://randomuser.me/api/?results=" + this.state.NumberofPeople;
    console.log(x);
    const url = x;
    const response = await fetch(url);
    const data = await response.json();
    let data_new = data.results.map((item) => {
      return {
        id: item.id.value,
        name: item.name.first,
        img: item.picture.medium,
      };
    });
    this.setState({ isLoading: false, data: data_new });
  }

  renderArray2() {
    let x = 0;
    let content = [[]];
    let rowContent = [];
    let array = this.state.data.map((item) => {
      x = x + 1;
      if (x % 3 === 0) {
        rowContent.push(
          <div key={item.id} className="cell">
            <img src={item.img}></img>
            <h1>{item.name}</h1>
          </div>
        );
        content.push(
          <div key={x / 3} className="sameRow">
            {rowContent}
          </div>
        );
        rowContent = [];
      } else {
        rowContent.push(
          <div key={item.id} className="cell">
            <img src={item.img}></img>
            <h1>{item.name}</h1>
          </div>
        );
      }
    });

    if (rowContent.length != 0) {
      content.push(
        <div key={x / 3} className="sameRow">
          {rowContent}
        </div>
      );
      rowContent = [];
    }
    return content;
  }

  render() {
    console.log(this.props);
    console.log(this.state.NumberofPeople);
    return (
      <div>
        {this.state.isLoading ? (
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        ) : (
          <div>{this.renderArray2()}</div>
        )}
      </div>
    );
  }
}

export default CustApi;
