import React from "react";
import SocialLinks from "./social-links";
import ColorModeSelector from "./color-mode-selector";

const SideMenu = ({ darkMode, setDarkMode }) => {
  return (
    <div className="sidemenu">
      <span className="logo">
        <button onClick={() => window.scroll(0, 0)}>m</button>
      </span>
      <div className="bottom-section">
        <SocialLinks />
        <ColorModeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default SideMenu;
