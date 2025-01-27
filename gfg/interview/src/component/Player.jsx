import React, { useState } from "react";

export default function Player({ initialname, symbol, isActive }) {
  // Fixed typo in 'symbol'
  const [playerName, setPlayerName] = useState(initialname); // State for the player's name
  const [isEditing, setEditing] = useState(false); // State to toggle editing mode

  // Toggle editing mode
  function handleEditClick() {
    setEditing((prevEditing) => !prevEditing);
    console.log("Editing mode:", !isEditing); // Logs the *new* editing state
  }

  // Update the player name
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  // Conditionally render the player name or input field
  const editablePlayerName = isEditing ? (
    <input
      type="text"
      required
      value={playerName}
      onChange={handleChange}
      className="player-name-input"
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <div>
      <li className={isActive ? 'active' : null }>
        <span className="player">
          {editablePlayerName} {/* Displays input or name */}
          <span className="player-symbol">{symbol}</span> {/* Fixed typo */}
        </span>
        <button onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"} {/* Button label toggles */}
        </button>
      </li>
    </div>
  );
}
