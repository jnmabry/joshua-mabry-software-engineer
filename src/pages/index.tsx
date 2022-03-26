import * as React from "react";
import ProjectCard from "../components/project-card";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

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
            and <span className="stroked"> UX/UI design. </span>
          </h1>
        </section>
        <section className="about-me" id="about">
          <h2 className="stroked">01.</h2>
          <h2>About Me</h2>
          <p>
            I am a polyglot programmer currently focusing on <b>TypeScript</b>,
            <b> JavaScript</b> and <b> Ruby</b>. A few of my favorite frameworks
            include but aren't limited to <b>Angular</b>, <b>React</b> and
            <b> Ruby on Rails</b>.<br></br>
            <br></br>Although I focus most of my time on software development, I
            also enjoy designing and prototyping user interfaces and components
            in <b>Figma</b>.
          </p>
          <div className="image">
            <StaticImage src="../images/bw-image-me-2.jpg" alt="My Picture" />
          </div>
        </section>
        <section className="portfolio" id="projects">
          <h2 className="stroked">02.</h2>
          <h2>Projects</h2>
          <p>
            Below you will a find a collection of personal projects that I have
            recently worked on in my free time. If you're interested in my work
            related projects or experience, please a take look at my resume or{" "}
            <a
              href="https://linkedin.com/in/jnmabry"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            profile for a detailed history.
          </p>
          <div className="projects">
            {this.projects.map((project, index) => {
              return (
                <ProjectCard project={project} key={"project-" + index + 1} />
              );
            })}
          </div>
        </section>
        {/* <section className="experiments" id="experiments">
          <h2 className="stroked">03.</h2>
          <h2>Experiments</h2>
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
        </section> */}
        <section className="contact" id="contact">
          <h2 className="stroked">03.</h2>
          <h2>Let's Talk</h2>
          <p>
            Feel free to drop me a line if you'd like to discuss my background
            in software development, design or to just say hello and I will get
            back to you as soon as possible. I am also open to mentoring
            opportunities if my schedule allows at the time of inquiry.
          </p>
          <form
            id="contact"
            name="Contact Form"
            method="POST"
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
        "A software engineering portfolio site that follows the JAMstack approach.",
      github: "https://github.com/jnmabry/joshua-mabry-software-engineer",
    },
  ];
}

export default IndexPage;
