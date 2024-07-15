import React from "react";
import { useState } from "react";

function ToggleButton() {
  const [isToggled, setisToggled] = useState(false);
  const [color, setColor] = useState("Green");

  const handleToggle = () => {
    setisToggled(true);
    setColor("red");
  };
  return (
    <>
      <p>Button is :{isToggled ? "Turned ON" : "Turned OFF"}</p>
      <button
        className="p-2 rounded"
        style={{ backgroundColor: color }}
        onClick={handleToggle}
      >
        {isToggled ? "Turn OFF" : "Turn ON"}
      </button>
    </>
  );
}

export default ToggleButton;
