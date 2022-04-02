import React, { Dispatch, SetStateAction } from "react";
import resumePdf from "../static/joshua_mabry_resume.pdf";

export interface MenuProps {
  menuItems: { title: string; link: string }[];
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Menu = (props: MenuProps) => {
  return (
    <div className="menu">
      <nav>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className={props.activeSection === item.link ? "active" : ""}
              >
                <a
                  href={item.link}
                  onClick={() => props.setActiveSection(item.link)}
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
    </div>
  );
};

export default Menu;
