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

  const digit = 2;
  function displayStrSalary(salary: number): string {
    let roundSalary: number = Math.round(salary * Math.pow(10, digit)) / Math.pow(10, digit);
    let Strsalary: string = roundSalary.toString();
    let dotIndex: number = Strsalary.indexOf(".");
    if (dotIndex === -1) {
      Strsalary += ".";
      dotIndex = Strsalary.length - 1;
    }
    let zeroCount: number = digit - (Strsalary.length - dotIndex - 1);
    for (let i = 0; i < zeroCount; i++) {
      Strsalary += "0";
    }
    return Strsalary;
  }

  function displayTime(time: number): string {
    let hour: number = Math.floor(time / 3600);
    let minute: number = Math.floor((time % 3600) / 60);
    let second: number = time % 60;

    let StrTime: string = "";
    if (hour > 0) {
      StrTime += hour.toString() + "時間";
    }
    if (minute > 0) {
      StrTime += minute.toString() + "分";
    }
    StrTime += second.toString() + "秒";

    return StrTime;
  }

  return (
    <div>
      <h1>SALARY CLOCKER</h1>
      <div>
        時給:
        <input 
          type="number" 
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
        円
        <p>秒単価:{displayStrSalary(salary/(60 * 60))}円</p>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        総額:
        {displayStrSalary(time * salary/(60 * 60))}円
      </div>
      <div>
        作業時間:
        {displayTime(time)}
      </div>
    </div>
  );
}
