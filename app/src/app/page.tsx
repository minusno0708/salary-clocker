"use client";

import React, { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState("");

  return (
    <div>
      <h1>SALARY TIMER</h1>
      <div>
        <input 
          type="number" 
          placeholder="時給"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
        円
      </div>
      <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
      <div>
        秒単価:{salary/(60*60)}円
      </div>
    </div>
  );
}
