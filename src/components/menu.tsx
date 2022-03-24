import React, { Dispatch, SetStateAction } from "react";

export interface MenuParams {
  menuItems: { title: string; link: string }[];
  scrollToSection: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {};
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({
  menuItems,
  scrollToSection,
  toggled,
  setToggled,
}: MenuParams) => {
  return (
    <div className={`menu ${toggled ? "open" : "closed"}`}>
      <nav>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={(e) => {
                    scrollToSection(e);
                    setToggled(!toggled);
                  }}
                >
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
