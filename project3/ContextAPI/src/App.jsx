import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./comopnent/Login";
import Profile from "./comopnent/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Welcome to login web pages </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
