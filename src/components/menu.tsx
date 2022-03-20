import React from "react";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
}

const Menu = ({ menuItems, scrollToSection }: MenuParams) => {
  return (
    <nav className="menu">
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
      </ul>
    </nav>
  );
};

export default Menu;
