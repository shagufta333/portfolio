import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Grid,
  Popup,
  Segment,
  Header,
} from "semantic-ui-react";
import axios from "axios";
import AboutCard from "./aboutCard";
import Fade from "react-reveal/Fade";
import HtmlIcon from "../images/html.png";
import ReactIcon from "../images/react.png";
import JsScript from "../images/js.png";
import CssIcon from "../images/css.png";
import GithubIcon from "../images/github.png";
import DevImg from "../images/deve.png";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    axios.get("./data/about.json").then((response) => {
      setAbouts(response.data);
    });
  });
  let aboutList = abouts.map((about) => {
    return (
      <div id={`about-${about.id}`} key={about.id}>
        <AboutCard about={about} />
      </div>
    );
  });
  return (
    <Popup
    position="left center"
      trigger={
        <Container textAlign="right">
          <Fade top>
            <Header as="h1" data-cy="about-header">
              About Me
            </Header>
            {/* <h1 id="about-header">About Me</h1> */}
          </Fade>
          <Fade right big>
            <p>
              With a background in computer science,working as sales consutant
              and kitchen assitant, the time has come to start my career as
              developer. My passion for <code>coding</code>, technology and
              problem solving lead me to career in IT. My prefered process is{" "}
              <strong>Test Driven Development</strong> and adapting the{" "}
              <strong>Agile Methodology</strong> of software development.
            </p>
          </Fade>
          <Image class="image" src={DevImg} alt="developer" centered />
          <div class="icons">
            <Fade bottom>
              <Grid padded="vertically" textAlign="center">
                <Grid.Row columns={5}>
                  <Image size="tiny" src={ReactIcon} />
                  <Image size="tiny" src={HtmlIcon} />
                  <Image size="tiny" src={JsScript} />
                  <Image size="tiny" src={CssIcon} />
                  <Image size="tiny" src={GithubIcon} />
                </Grid.Row>
              </Grid>
            </Fade>
          </div>
        </Container>
      }
    >
      <Popup.Content>{aboutList}</Popup.Content>
     
      
    </Popup>
  );
};

export default About;
