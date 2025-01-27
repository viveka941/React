import React from 'react'

export default function List({name,age,address}) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Address : {address}</h3>
    </div>
  )
}
