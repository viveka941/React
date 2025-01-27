import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BackgroundChnage from "./component/BackgroundChanger/BackgroundChnage";
import PasswordGeneator from "./component/PasswordGeneator";
import List from "./list";

function App() {
  const user = [
    {
      name: "vivek",
      age: 29,
      address: "sant kabir nager",
    },
    {
      name: "vivek1",
      age: 29,
      address: "sant kabir nager",
    },
    {
      name: "vivek2",
      age: 29,
      address: "sant kabir nager",
    },
    {
      name: "vivek3",
      age: 29,
      address: "sant kabir nager",
    },
  ];

  return (
    <>
      {/* <BackgroundChnage /> */}
      {/* <PasswordGeneator /> */}

      <ul>
       {user.map((item)=>(
        <List {...item} />
       ))}
      </ul>
    </>
  );
}

export default App;
