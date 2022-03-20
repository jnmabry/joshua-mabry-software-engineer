import React from "react";
import SEO from "./seo";
import Menu from "./menu";
import Particles from "react-tsparticles";
import Helmet from "react-helmet";

import "../styles/main.scss";

export default function Layout({ children, scrollToSection }) {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "dark-mode",
        }}
      />
      <SEO></SEO>
      <Menu menuItems={menuItems} scrollToSection={scrollToSection} />
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
                // value: !darkMode.value ? "#000" : "#fff",
                value: "#FFF",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  // color: !darkMode.value ? "#000" : "#fff",
                  color: "#FFF",
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
                // color: !darkMode.value ? "#000" : "#fff",
                color: "#FFF",

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
      <footer>
        © {new Date().getFullYear()} Designed and coded by Joshua Mabry
      </footer>
    </>
  );
}

const menuItems = [
  { title: "01. About Me", link: "#about" },
  { title: "02. Projects", link: "#projects" },
  { title: "03. Experiments", link: "#experiments" },
  { title: "04. Let's Talk", link: "#contact" },
];
