import React from "react";
import SocialLinks from "./social-links";
import ColorModeSelector from "./color-mode-selector";

const SideMenu = ({ darkMode, setDarkMode }) => {
  return (
    <div className="sidemenu">
      <div className="bottom-section">
        <SocialLinks />
        <ColorModeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default SideMenu;
