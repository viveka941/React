import React, { useRef, useState, useEffect } from "react";
import ResultModel from "./ResultModel";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef()
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    return () => clearTimeout(timer.current); // Clear timer on component unmount
  }, []);

  function handleStart() {
    setTimerExpired(false);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
     dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
    {timerExpired && <ResultModel ref={dialog} targetTime={targetTime}  result={"lost"}/>}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerStarted && !timerExpired ? handleStop : handleStart}
          >
            {timerStarted && !timerExpired ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p
          className={`status ${
            timerExpired ? "expired" : timerStarted ? "active" : "inactive"
          }`}
        >
          {timerExpired
            ? "Time's up!"
            : timerStarted
            ? "Time is running..."
            : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
