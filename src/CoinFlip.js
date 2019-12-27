import React, { Component } from "react";
import Coin from "./Coin";
class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinSide: null,
      flipsCounter: 0,
      heads: 0,
      tails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  countFlipsNumber(currentState) {
    return { flipsCounter: currentState.flipsCounter + 1 };
  }

  setCoinSide() {
    return { coinSide: Math.floor(Math.random() * 2) };
  }

  incrementOneSide(currentState) {
    return currentState.coinSide === 1
      ? { heads: currentState.heads + 1 }
      : { tails: currentState.tails + 1 };
  }

  coinFlip() {
    this.setState(this.setCoinSide);
    this.setState(this.countFlipsNumber);
    this.setState(this.incrementOneSide);
  }

  handleClick() {
    this.coinFlip();
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin side={this.state.coinSide} />
        <button onClick={this.handleClick}>Flip the coin</button>
        <p>
          Out of {this.state.flipsCounter} flips, there have been{" "}
          {this.state.heads} heads and {this.state.tails} tails
        </p>
      </div>
    );
  }
}

export default CoinFlip;
