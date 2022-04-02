import React, { Dispatch, SetStateAction } from "react";
import resumePdf from "../static/joshua_mabry_resume.pdf";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
}

const Menu = ({ menuItems }: MenuParams) => {
  return (
    <div className="menu">
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
                <a href={item.link}>
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
    </div>
  );
};

export default Menu;
