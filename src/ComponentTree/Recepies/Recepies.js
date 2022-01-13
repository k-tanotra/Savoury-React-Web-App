import React from "react";
import "./Recepies.css";

class Recepies extends React.Component {
  getP() {
    var x = document.getElementById("pos").scrollLeft;
    console.log(x);
    if (document.getElementById("pos").scrollLeft > 200) {
      document.getElementById("pos").scrollLeft += -200;
    } else {
      document.getElementById("pos").scrollLeft = 0;
    }
  }
  getN() {
    var x = document.getElementById("pos").scrollLeft;
    console.log(x);
    if (document.getElementById("pos").scrollLeft < 870) {
      document.getElementById("pos").scrollLeft += 200;
    } else {
      document.getElementById("pos").scrollLeft = 1070;
    }
  }
  render() {
    return (
      <div>
        <h1 className="Recepies_head">Recepies</h1>
        <div className="Recepies">
          <button onClick={this.getP} className="Prev_next">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <div className="HorizontalScroll" id="pos">
            <div className="Box">1</div>
            <div className="Box">2</div>
            <div className="Box">3</div>
            <div className="Box">4</div>
            <div className="Box">5</div>
            <div className="Box">6</div>
            <div className="Box">7</div>
            <div className="Box">8</div>
            <div className="Box">9</div>
          </div>
          <button onClick={this.getN} className="Prev_next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Recepies;
