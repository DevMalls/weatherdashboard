import React, { createContext, useState } from "react";

interface TemperatureContextProps {
  unit: string;
  toggleUnit: () => void;
}

type ComponentProps = { children: React.ReactNode };

export const context = createContext<TemperatureContextProps | undefined>(
  undefined
);

const TemperatureContext = (props: ComponentProps) => {
  const [unit, setUnit] = useState("Celsius");

  //======================================================================

  const toggleUnit = () => {
    setUnit((prev) => (prev === "Celsius" ? "Fahrenheit" : "Celsius"));
  };

  //======================================================================

  return (
    <context.Provider value={{ unit, toggleUnit }}>
      {props.children}
    </context.Provider>
  );
};
export default TemperatureContext;
