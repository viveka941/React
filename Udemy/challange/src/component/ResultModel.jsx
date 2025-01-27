import React from 'react'

export default function ResultModel({ref,result, targetTime}) {
  return (
    <dialog ref={ref} className='result-model' open>
      <h2>{result}</h2>
      <p>the target time was <strong>{targetTime}</strong></p>
      <p>you stopped the timer with <strong> X seconds left.</strong></p>
      <form action="diglog">Close</form>
    </dialog>
  )
}
