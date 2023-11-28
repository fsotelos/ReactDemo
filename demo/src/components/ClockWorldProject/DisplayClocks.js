import React from "react";
import Clock from "./Clock";

function DisplayClocks() {
    return (
      <div className="App">
        <h1>Clock World</h1>
        <div className="clock-container">
          <Clock timeZone="UTC" label="UTC" />
          <Clock timeZone="America/Chicago" label="Austin, Texas" />
          <Clock timeZone="Europe/London" label="Londres" />
          <Clock timeZone="America/Bogota" label="Bogotá" />
        </div>
      </div>
    );
  }

  export default DisplayClocks;