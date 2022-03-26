import React, { Dispatch, SetStateAction } from "react";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
}

const Menu = ({ menuItems, scrollToSection }: MenuParams) => {
  return (
    <div className="menu">
      <nav>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link} onClick={(e) => scrollToSection(e)}>
                  {item.title}
                  <span className="current-section"></span>
                </a>
              </li>
            );
          })}
          <li>
            <button>
              <i className="fa fa-download"></i>
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
