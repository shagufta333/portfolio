import React from "react";
import { Container, Image, Grid,Popup, Segment } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import HtmlIcon from "../images/html.png";
import ReactIcon from "../images/react.png";
import JsScript from "../images/js.png";
import CssIcon from "../images/css.png";
import GithubIcon from "../images/github.png";

const Welcome = () => {
  return (
    <Popup
      
       
       trigger={
        
    <Container data-tooltip="text" >
      
      <Fade top>
        <h1 id="hello">Welcome</h1>
      </Fade>
      <Fade right>
        <p>
          This is my simple portfolio! Within you'll find a small collection of
          some projects I've been working on. Feel free to contact me with any
          questions you might have.
        </p>
      </Fade>

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
      </Container>
       }
       >
        <Popup.Header as="h3">User Rating</Popup.Header>
        <Popup.Content>gggg</Popup.Content>
        </Popup>
    
  );
};

export default Welcome;
