import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackgroundChnage from "./component/BackgroundChanger/BackgroundChnage";
import PasswordGeneator from "./component/PasswordGeneator";

function App() {
 
  return (
    <>
     {/* <BackgroundChnage /> */}
     <PasswordGeneator />
    </>
  );
}

export default App;
