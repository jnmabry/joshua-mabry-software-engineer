import React from "react";

const socialURLs = [
  { site: "github", url: "https://github.com/jnmabry" },
  { site: "linkedin", url: "https://linkedin.com/in/jnmabry" },
  { site: "dribbble", url: "https://dribbble.com/jnmabry" },
];

const SocialLinks = (props) => (
  <div className="social">
    {socialURLs.map((social, index) => (
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        key={index + 1}
      >
        <i className={"fab fa-" + social.site}></i>
      </a>
    ))}
    <a href="mailto:joshuamabry@rocketmail.com">
      <i className="far fa-envelope"></i>
    </a>
  </div>
);

export default SocialLinks;
