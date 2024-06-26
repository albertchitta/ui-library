import React from "react";
import { colorVariant, conditionStyle, flexCenter, localVarStyle } from "./App.css";
import { light, dark } from "./vars.css";

function App() {
  return (
    <div className={light}>
      <div className={localVarStyle}>
        Hello World
      </div>
      <StyledComponent color="secondary"/>
      <div className={conditionStyle}>
        Test
      </div>
    </div>
  )
}

interface StyledComponentProps {
  color: keyof typeof colorVariant;
}

function StyledComponent (props: StyledComponentProps) {
  return (
    <div className={colorVariant[props.color]}>
      style
    </div>
  )
}

export default App
