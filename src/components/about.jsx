import React from "react";
import { Container } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Container text>
      <Fade top>
          <h1 id="about-header">About Me</h1>
        </Fade>
        <Fade right big>
          <p>
            With a background in computer science, serving mostly as a boat captain
            and working in sales, the time has come to start my career as developer. My passion
            for <code>coding</code>, technology and problem solving lead me to
            career in IT. My prefered process is{" "}
            <strong>Test Driven Development</strong> and adapting the{" "}
            <strong>Agile Methodology</strong> of software development.
          </p>
        </Fade>
    </Container>
  );
};

export default About;