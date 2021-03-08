import React from "react";
import PropTypes from "prop-types";
import { validateSave } from "../utils/save-validation";

export default function AttractScreen(props) {
  const handleClick = () => {
    props.setGameStarted(true);
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const fileText = fileReader.result;
      props.setGameState(validateSave(fileText));
      props.setGameStarted(true);
    };

    fileReader.readAsText(file);
  };

  return (
    <>
      <div>Welcome to Academy!</div>
      <br />
      <br />
      <button id="start-game-button" onClick={handleClick}>
        Start Game
      </button>
      <br />
      <br />
      <label htmlFor="load-game-button">Load Save From File</label>
      <br />
      <input
        type="file"
        id="load-game-button"
        name="load-game-button"
        accept="text/plain, .txt, .save, .json"
        onChange={handleLoad}
      />
    </>
  );
}

AttractScreen.propTypes = {
  setGameStarted: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};
