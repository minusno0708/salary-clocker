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
    <div className="bg-slate-100 text-yellow-900 min-h-screen font-kiwiMaru">
      <div className="bg-yellow-900 py-2 w-full flex-col flex items-center">
        <h1 className="text-yellow-300 text-5xl tracking-wider font-black">SALARY CLOCKER</h1>
      </div>
      <div className="flex-col flex items-center mt-20">
        <p className="text-3xl">
        時給
          <input 
            type="number" 
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            className="bg-slate-100 text-yellow-500 text-center w-24 h-10 ml-1.5 outline-none"
          />
        円
        </p>
        <p className="text-2xl mt-3">
          <span>￥100</span>
          <input
            type="range"
            min="100"
            max="3000"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            className="w-96 mt-3"
          />
          <span>￥3000</span>
        </p>
        <p className="text-2xl mt-3">秒単価:{displayStrSalary(salary/(60 * 60))}円</p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-900 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          onClick={handleStart}>Start</button>
        <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-900 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          onClick={handlePause}>Pause</button>
        <button className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-900 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          onClick={handleReset}>Reset</button>
      </div>
      <div className="flex-col flex items-center">
        <div className="text-yellow-500 text-5xl mt-10">
          ￥{displayStrSalary(time * salary/(60 * 60))}
        </div>
        <div className="text-3xl mt-10">
          Time:
          {displayTime(time)}
        </div>
      </div>
    </div>
  );
}
