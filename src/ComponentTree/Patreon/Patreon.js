import React from "react";
import "./Patreon.css";
class Patreon extends React.Component {
  render() {
    return (
      <div className="patreon">
        <h1>Patreon</h1>
        <p>
          The support from my audience not only makes the show possible, it
          begets the creation of<br></br>new series like Basics with Babish. I
          want to be part of the new wave of media creators,<br></br>and your
          contributions are helping make that a reality.
        </p>
        <a>
          <div className="contribute">Contribute</div>
        </a>
      </div>
    );
  }
}

export default Patreon;
