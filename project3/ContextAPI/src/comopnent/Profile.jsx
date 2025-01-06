import React, { useContext } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/UserContext';

export default function Profile() {
  const {user}=useContext(UserContext);
  if(!user) return <div>please login </div>
  return (
    <div>
      <h1> Welcom {user.username}</h1>
    </div>
  )
}
