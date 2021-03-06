import React from "react";

const ColorModeSelector = ({ darkMode, setDarkMode }) => {
  return (
    <div className="toggle-theme">
      <input
        type="checkbox"
        id="mode-selector"
        name="mode-selector"
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        readOnly
      />
      <label htmlFor="mode-selector">Toggle</label>
    </div>
  );
};

export default ColorModeSelector;
