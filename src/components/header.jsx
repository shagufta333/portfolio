import React from "react";
import { Menu } from "semantic-ui-react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu tabular>
      <Menu.Item 
      data-cy="portfolio-tab"      
      name="My Portfolio"
      as={Link}
      to={{ pathname: "/" }} />
      <br/>
       <Menu.Item 
       data-cy="projects-tab"      
       name="My Projects"
       as={Link}
       to={{ pathname: "/myProjects" }} />
      <Menu.Item 
      data-cy="about-tab"      
      name="About Me"
      as={Link}
      to={{ pathname: "/about" }}/>
     
      <Menu.Item 
      data-cy="contact-tab"      
      name="Contact"
      as={Link}
      to={{ pathname: "/contact" }}/>
    </Menu>
  );
};
export default Header;
