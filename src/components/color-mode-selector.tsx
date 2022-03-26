import React from "react";

const ColorModeSelector = ({ darkMode, setDarkMode }) => {
  return (
    <div className="toggle-theme">
      <input
        type="checkbox"
        id="switch"
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        readOnly
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default ColorModeSelector;
