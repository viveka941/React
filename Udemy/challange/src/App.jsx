import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './component/Player'
import TimeChallenge from './component/TimeChallenge'

function App() {
 

  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={"Easy"} targetTime={1} />
        <TimeChallenge title={"Not Easy"} targetTime={5} />{" "}
        <TimeChallenge title={"getting tough"} targetTime={10} />{" "}
        <TimeChallenge title={"pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App
