import React from "react";
import "./App.css";

import { useState, useEffect } from "react";
import { Todos } from "./components/Todos";
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
