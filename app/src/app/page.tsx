"use client";

import React, { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState(1000);

  return (
    <div>
      <h1>SALARY TIMER</h1>
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
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
