import React, { useContext, useState } from "react";
import UserContextProvider from "../context/UserContextProvider";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const {setUser}= useContext(UserContext)
  const handleSubmint = (e) => {
    e.preventDefault()
    setUser({username,passowrd})
  };
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} 
      onChange={(e)=>setUsername(e.target.value)}placeholder="username" />
      {" "}
      <input type="text" value={passowrd} 
     onChange={(e)=>setPassowrd(e.target.value)} 
      placeholder="passowrd" />
      <button onClick={handleSubmint}>Submit</button>
    </div>
  );
}
