import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  chooseSide(side) {
    return `https://tinyurl.com/react-coin-${side}-jpg`;
  }

  render() {
    return (
      <div>
        <img
          className="Coin"
          src={
            this.props.side === 0
              ? this.chooseSide("tails")
              : this.chooseSide("heads")
          }
        ></img>
      </div>
    );
  }
}

export default Coin;
