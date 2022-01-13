import React from "react";
import image from "./cookbook2.jpg";
import "./cookbook.css";

class CookBook extends React.Component {
  render() {
    return (
      <div className="Cookbook">
        <h1>CookBook</h1>
        <img src={image} className="image"></img>
        <h2>Pre-order my cookbook here</h2>
        <h2>Catalog</h2>
        <div className="Grid">
          <h1 className="item1">1</h1>
          <h1 className="item2">2</h1>
          <h1 className="item3">3</h1>
          <h1 className="item4">4</h1>
          <h1 className="item5">5</h1>
          <h1 className="item6">6</h1>
          <h1 className="item7">7</h1>
          <h1 className="item8">8</h1>
          <h1 className="item9">9</h1>
        </div>
      </div>
    );
  }
}

export default CookBook;
