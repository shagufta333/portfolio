import React, { Component } from "react";
import { Menu, Segment  } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "my portfolio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (

    <Segment id="header"  >
      <Menu >
        <div class="links" >
        <Menu.Item
         
         data-cy="portfolio-tab"
          name="My Portfolio"
          as={Link}
          to={{ pathname: "/" }}
          active={activeItem === "my portfolio"}
          onClick={this.handleItemClick}
        />
        
        <Menu.Item class="item"
          data-cy="projects-tab"
          name="My Projects"
          as={Link}
          to={{ pathname: "/myProjects" }}
          onClick={this.handleItemClick}

        />
        
        <Menu.Item class="item"
         position="left"
          data-cy="about-tab"
          name="About Me"
          as={Link}
          to={{ pathname: "/about" }}
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />

        <Menu.Item class="item"
          data-cy="contact-tab"
          name="Contact"
          as={Link}
          to={{ pathname: "/contact" }}
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
        </div>
      </Menu>
      </Segment>
    );
  }
}
export default Header;
