import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import TemperatureContext from "./components/context/TemperatureContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <TemperatureContext>
        <Dashboard />
      </TemperatureContext>
    </div>
  );
};

export default App;
