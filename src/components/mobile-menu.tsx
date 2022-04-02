import React, { Dispatch, SetStateAction } from "react";
import SocialLinks from "./social-links";
import ColorModeSelector from "./color-mode-selector";
import resumePdf from "../static/joshua_mabry_resume.pdf";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const MobileMenu = ({
  menuItems,
  toggled,
  setToggled,
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
}: MenuParams) => {
  return (
    <div className={`mobile-menu ${toggled ? "open" : "closed"}`}>
      <nav>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className={activeSection === item.link ? "active" : ""}
              >
                <a
                  href={item.link}
                  onClick={() => {
                    setToggled(!toggled);
                    setActiveSection(item.link);
                  }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <li>
            <a href={resumePdf} target="_blank">
              <i className="fa fa-download"></i>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="bottom-section">
        <SocialLinks></SocialLinks>
        <ColorModeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default MobileMenu;
