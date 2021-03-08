import React, { useState } from "react";
import PropTypes from "prop-types";

export default function GameScreen(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a sample stateful React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br />
      <div>Game State:</div>
      <div>{JSON.stringify(props.gameState)}</div>
    </div>
  );
}

GameScreen.propTypes = {
  gameState: PropTypes.object.isRequired,
  setGameState: PropTypes.func.isRequired,
};
