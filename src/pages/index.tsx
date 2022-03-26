import * as React from "react";
import ProjectCard from "../components/project-card";
import Layout from "../components/layout";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSections: [],
    };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  componentDidMount() {
    this.setState({ pageSections: document.getElementsByTagName("section") });
  }

  scrollToSection(e) {
    e.preventDefault();
    const sectionTitle = e.target.href.split("#")[1];
    const section = this.state.pageSections.namedItem(`${sectionTitle}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <Layout scrollToSection={this.scrollToSection}>
        <section className="hero" id="top">
          <h1>
            Hey, I’m Josh Mabry. <br />
            I'm a <span className="stroked">Software Engineer </span>
            <br />
            who specializes in
            <br />
            <span className="stroked"> full-stack development </span>
            <br />
            and <span className="stroked"> UI design. </span>
          </h1>
        </section>
        <section className="about-me" id="about">
          <h2 className="stroked">01.</h2>
          <h2>About Me</h2>
          <p>
            I am a Digital Designer turned Software Developer, based out of
            Eastern, KY. <br /> <br />
            In 2011, I began working in the creative field as a Graphic
            Designer. I picked up many valuable skills including a strong
            understanding of Layout, Typography and all of the software that
            goes along (Adobe Creative Suite). <br /> <br />
            In my spare time, I also began building websites for clients. I came
            to enjoy web development so much that I started working as a
            developer full-time in 2016. The culmination of my creative and
            technical skills allow me to develop websites and mobile apps from
            start to finish.
          </p>
          <div className="image">
            <img src="" alt="" />
          </div>
        </section>
        <section className="portfolio" id="projects">
          <h2 className="stroked">02.</h2>
          <h2>Projects</h2>
          <p>
            Bacon ipsum dolor amet kielbasa ham hock shoulder chicken capicola
            pork chop leberkas pork landjaeger frankfurter sausage flank t-bone.
            Filet mignon t-bone spare ribs bacon tongue bresaola hamburger
            meatloaf turkey tri-tip beef ribs buffalo ribeye shoulder.
          </p>
          <div className="projects">
            {this.projects.map((project, index) => {
              return (
                <ProjectCard project={project} key={"project-" + index + 1} />
              );
            })}
          </div>
        </section>
        <section className="experiments" id="experiments">
          <h2 className="stroked">03.</h2>
          <h2>Experiments</h2>
          <p>
            Bacon ipsum dolor amet kielbasa ham hock shoulder chicken capicola
            pork chop leberkas pork landjaeger frankfurter sausage flank t-bone.
            Filet mignon t-bone spare ribs bacon tongue bresaola hamburger
            meatloaf turkey tri-tip beef ribs buffalo ribeye shoulder.
          </p>
          <div className="experiments-container">
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
            <div className="experiment"></div>
          </div>
        </section>
        <section className="contact" id="contact">
          <h2 className="stroked">04.</h2>
          <h2>Let's Talk</h2>
          <p>
            Bacon ipsum dolor amet kielbasa ham hock shoulder chicken capicola
            pork chop leberkas pork landjaeger frankfurter sausage flank t-bone.
            Filet mignon t-bone spare ribs bacon tongue bresaola hamburger
            meatloaf turkey tri-tip beef ribs buffalo ribeye shoulder. Jowl
            drumstick biltong doner chicken, kevin short loin landjaeger.
          </p>
          <form
            id="contact"
            name="Contact Form"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" required />
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" required />
            <label htmlFor="subject">Subject</label>
            <input name="subject" id="subject" type="text" required />
            <label htmlFor="message">Message</label>
            <textarea
              noresize="true"
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
            ></textarea>
            <div data-netlify-recaptcha="true"></div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </Layout>
    );
  }

  projects = [
    {
      title: "Software Engineer Portfolio Site",
      role: "Development and UI Design",
      technologies: "Gatsby JS, React, Sass, Contentful and Netlify",
      description:
        "The American Graphic Design & Advertising Awards 'AGDA' began as American Corporate Identity and was created by logo expert David E. Carter.",
      url: "www.joshuamabry.com",
    },
    {
      title: "The AGDA Awards",
      role: "UI Design and Front-end Development",
      technologies: "CSS, HTML, TypeScript, Gulp",
      description:
        "The American Graphic Design & Advertising Awards 'AGDA' began as American Corporate Identity and was created by logo expert David E. Carter.",
      url: "localhost:8000",
    },
    {
      title: "The AGDA Awards",
      role: "UI Design and Front-end Development",
      technologies: "CSS, HTML, TypeScript, Gulp",
      description:
        "The American Graphic Design & Advertising Awards 'AGDA' began as American Corporate Identity and was created by logo expert David E. Carter.",
      url: "localhost:8000",
    },
  ];
}

export default IndexPage;
