"use client";

import React, { useState, useRef } from "react";

export default function Home() {
  const [salary, setSalary] = useState(1000);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function handleStart() {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(countTime => countTime + 1);
    }, 1000);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    setTime(0);
  }

  return (
    <div>
      <h1>SALARY WATCHER</h1>
      <div>
        時給:
        <input 
          type="number" 
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
        円
        <p>秒単価:{salary/(60*60)}円</p>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        総額:
        {time * salary/(60*60)}円
      </div>
    </div>
  );
}
