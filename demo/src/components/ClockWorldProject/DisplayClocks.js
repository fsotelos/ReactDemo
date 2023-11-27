import React from "react";
import Clock from "./Clock";

function DisplayClocks() {
    return (
      <div className="App">
        <h1>Reloj Mundial</h1>
        <div className="clock-container">
          <Clock timeZone="UTC" label="Tiempo Universal Coordinado (UTC)" />
          <Clock timeZone="America/Chicago" label="Austin, Texas" />
          <Clock timeZone="Europe/London" label="Londres" />
          <Clock timeZone="America/Bogota" label="Bogotá" />
          {/* Agrega más relojes según las zonas horarias deseadas */}
        </div>
      </div>
    );
  }

  export default DisplayClocks;