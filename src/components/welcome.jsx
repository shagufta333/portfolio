import React from "react";
import { Container, Image, Segment, Grid } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import HtmlIcon from "../images/html2.png";
import ReactIcon from "../images/react6.png";
import JsScript from "../images/js.png";
import CssIcon from "../images/css9.png";
import CodeIcon from "../images/code3.png";
import GithubIcon from "../images/github7.png";

const Welcome = () => {
  return (
    <Container text>
      <Segment
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <Fade top>
          <h1 id="hello">Welcome</h1>
        </Fade>
        <Fade right>
          <p>
            This is my simple portfolio! Within you'll find a small collection
            of some projects I've been working on. Feel free to contact me with
            any questions you might have.
          </p>
        </Fade>
        {/* <Image src={JobImg} alt="working" centered /> */}
        <Fade bottom>
          <Grid padded="vertically" textAlign="center">
            <Grid.Row columns={6}>
              <Image size="tiny" src={ReactIcon} />
              <Image size="tiny" src={HtmlIcon} />
              <Image size="tiny" src={JsScript} />
              {/* <Image size="tiny" src={CodeIcon} /> */}
              
              <Image size="tiny" src={CssIcon} />
              
              <Image size="tiny" src={GithubIcon} />
            </Grid.Row>
          </Grid>
        </Fade>
      </Segment>
    </Container>
  );
};

export default Welcome;