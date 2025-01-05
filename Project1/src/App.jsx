import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackgroundChnage from "./component/BackgroundChanger/BackgroundChnage";

function App() {
 

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
     <BackgroundChnage />
    </>
  );
}

export default App;
