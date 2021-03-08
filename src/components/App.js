import React, { useState } from "react";
import { hot } from "react-hot-loader";
import GameScreen from "./GameScreen";
import AttractScreen from "./AttractScreen";

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState({});
  return (
    <>
      {(isGameStarted && (
        <GameScreen gameState={gameState} setGameState={setGameState} />
      )) || (
        <AttractScreen
          setGameStarted={setGameStarted}
          setGameState={setGameState}
        />
      )}
    </>
  );
};

export default hot(module)(App);
