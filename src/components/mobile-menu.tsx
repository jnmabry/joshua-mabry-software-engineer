import React, { Dispatch, SetStateAction } from "react";
import SocialLinks from "./social-links";
import ColorModeSelector from "./color-mode-selector";
import resumePdf from "../static/joshua_mabry_resume.pdf";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({
  menuItems,
  scrollToSection,
  toggled,
  setToggled,
  darkMode,
  setDarkMode,
}: MenuParams) => {
  return (
    <div className={`mobile-menu ${toggled ? "open" : "closed"}`}>
      <nav>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  window.location.href.includes(item.link) ? "active" : ""
                }
              >
                <a href={item.link} onClick={() => setToggled(!toggled)}>
                  {item.title}
                  <span className="current-section"></span>
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
