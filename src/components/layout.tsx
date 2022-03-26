import React, { useState } from "react";
import SEO from "./seo";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";
import SideMenu from "./sidemenu";
import Particles from "react-tsparticles";
import Helmet from "react-helmet";

import "../styles/main.scss";

export default function Layout({ children, scrollToSection }) {
  const [darkMode, setDarkMode] = useState(true);
  const [menuToggled, setMenuToggled] = useState(false);

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: darkMode ? "dark-mode" : "light-mode",
        }}
      />
      <SEO></SEO>
      <span id="logo">
        <button
          onClick={() => {
            window.scroll(0, 0);
            setMenuToggled(false);
          }}
        >
          m
        </button>
      </span>
      <button id="hamburger" onClick={() => setMenuToggled(!menuToggled)}>
        <i className={`fa ${menuToggled ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <Menu menuItems={menuItems} scrollToSection={scrollToSection} />
      <MobileMenu
        menuItems={menuItems}
        scrollToSection={scrollToSection}
        toggled={menuToggled}
        setToggled={setMenuToggled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      ></MobileMenu>
      <SideMenu darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="particles-container">
        <Particles
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: !darkMode ? "#000" : "#fff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: !darkMode ? "#000" : "#fff",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: !darkMode ? "#000" : "#fff",
                opacity: 0.25,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "top-left",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: true,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <main>{children}</main>
      {/* <footer>
        <div>
          © {new Date().getFullYear()} Designed and coded by Joshua Mabry
        </div>
      </footer> */}
    </>
  );
}

const menuItems = [
  { title: "01. About Me", link: "#about" },
  { title: "02. Projects", link: "#projects" },
  // { title: "03. Experiments", link: "#experiments" },
  { title: "03. Let's Talk", link: "#contact" },
];
