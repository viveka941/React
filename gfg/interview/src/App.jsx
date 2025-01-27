import React, { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from "./component/Log";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const alreadyPlayed = prevTurns.some(
        (turn) => turn.square.row === rowIndex && turn.square.col === colIndex
      );
      if (alreadyPlayed) {
        return prevTurns; // Prevent overwriting
      }

      const currentPlayer = prevTurns.length % 2 === 0 ? "X" : "O";
      return [
        ...prevTurns,
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ];
    });

    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialname="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSqure={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
