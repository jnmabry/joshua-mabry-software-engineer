import React from "react";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
  toggled: boolean;
}

const Menu = ({ menuItems, scrollToSection, toggled }: MenuParams) => {
  return (
    <div className={`menu ${toggled ? "open" : "closed"}`}>
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
      {/* <button>
        <i className="fa fa-x"></i>
      </button> */}
    </div>
  );
};

export default Menu;
