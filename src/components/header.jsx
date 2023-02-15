import React from "react";
import { Menu } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu tabular>
      <Menu.Item 
      data-cy="about-tab"      
      name="About Me"
      as={Link}
      to={{ pathname: "/about" }} />
      <Menu.Item name="My Projects" />
      <Menu.Item name="My Resume" />
      <Menu.Item name="Contact" />
    </Menu>
  );
};
export default Header;
