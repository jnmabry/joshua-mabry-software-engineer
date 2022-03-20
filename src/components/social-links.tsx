import React from "react";

const socialURLs = [
  { site: "github", url: "https://github.com/jnmabry" },
  { site: "linkedin", url: "https://linkedin.com/in/jnmabry" },
  { site: "dribbble", url: "https://dribbble.com/jnmabry" },
  { site: "behance", url: "https://www.behance.net/joshmabry" },
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
    <a href="mailto:inkandcapture@gmail.com">
      <i className="far fa-envelope"></i>
    </a>
  </div>
);

export default SocialLinks;
