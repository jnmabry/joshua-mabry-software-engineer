import React from "react";

const ColorModeSelector = () => {
  const handleTheme = (theme) => {
    // theme === "dark" ? darkMode.enable() : darkMode.disable();
  };

  return (
    <div className="toggle-theme">
      <input
        type="checkbox"
        id="switch"
        onClick={
          () => {}
          // darkMode.value ? handleTheme("light") : handleTheme("dark")
        }
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default ColorModeSelector;
