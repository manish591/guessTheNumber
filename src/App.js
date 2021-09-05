import { useState } from "react";
import "./styles.css";

let inputValue;
let randomNumber = Math.floor(Math.random() * 100);
let turns = 0;

export default function App() {
  const [previousGuess, setPreviousGuess] = useState("");
  const [output, setOutput] = useState("Output will show here");
  const [display, setDisplay] = useState("none");

  function inputUserGuess(e) {
    inputValue = Number(e.target.value);
  }

  function CheckUserGuess() {
    turns++;

    if (inputValue === "" || inputValue === undefined) {
      return setOutput("Please Input!");
    }

    if (turns >= 10) {
      setDisplay("block");
      setOutput("You are Out Of Chances! Restart The Game.");
      return;
    }

    if (inputValue === randomNumber) {
      setOutput("You Guessed It Right!");
    }

    if (inputValue > randomNumber) {
      setOutput("Too High!");
    } else if (inputValue < randomNumber) {
      setOutput("Too Low!");
    }

    setPreviousGuess(" " + inputValue);
  }

  function playAgain() {
    turns = 0;
    inputValue = undefined;
    setOutput("Output Will Show Here");
    setDisplay("none");
    setPreviousGuess("");
  }

  return (
    <div className="App">
      <h1>Can you guess This Number?</h1>
      <p>Guess the number bewtween 1 to 100 in ten chances.</p>
      <div className="inputbar">
        <input onChange={inputUserGuess} />
        <button onClick={CheckUserGuess}>Check</button>
      </div>
      <div className="outputbox">
        <p>Previous Guess: {previousGuess}</p>
        <p>{output}</p>
        <button onClick={playAgain} style={{ display: display }}>
          Play Again
        </button>
      </div>
    </div>
  );
}
