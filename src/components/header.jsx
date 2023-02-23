import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "my portfolio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          data-cy="portfolio-tab"
          name="My Portfolio"
          as={Link}
          to={{ pathname: "/" }}
          active={activeItem === "my portfolio"}
          onClick={this.handleItemClick}
        />
        <br />
        <Menu.Item
          data-cy="projects-tab"
          name="My Projects"
          as={Link}
          to={{ pathname: "/myProjects" }}
          onClick={this.handleItemClick}

        />
        <Menu.Item
          data-cy="about-tab"
          name="About Me"
          as={Link}
          to={{ pathname: "/about" }}
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          data-cy="contact-tab"
          name="Contact"
          as={Link}
          to={{ pathname: "/contact" }}
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
export default Header;
