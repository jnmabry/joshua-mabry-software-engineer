import React from "react";
import SocialLinks from "./social-links";
import ColorModeSelector from "./color-mode-selector";

const SideMenu = ({ menuItems, scrollToSection, darkMode, setDarkMode }) => {
  return (
    <div className="sidemenu">
      <span className="logo">
        <button onClick={() => window.scroll(0, 0)}>m</button>
      </span>
      {/* <div className="navigation">
        <button>
          <i className="fa fa-long-arrow-alt-up"></i>
        </button>
        <div className="pages">
          01 <hr /> 04
        </div>
        <button>
          <i className="fa fa-long-arrow-alt-down"></i>
        </button>
      </div> */}
      <div className="bottom-section">
        <SocialLinks />
        <ColorModeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default SideMenu;
