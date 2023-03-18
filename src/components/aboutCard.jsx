import React from "react";
import { Item } from "semantic-ui-react";

const AboutCard = ({ about }) => {
  return (
    <div class="popup">
      <div class="popup-wrapper">
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as="h3">Name: {about.name}</Item.Header>

              <Item.Extra>Location:{about.location}</Item.Extra>

              <Item.Description style={{ color: "gray" }}>
                Intrerest: {about.hobbies}
              </Item.Description>
              <Item.Extra>Languages:{about.lang}</Item.Extra>
              <Item.Description style={{ color: "gray" }}>
                Keywords: {about.keyw}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    </div>
  );
};

export default AboutCard;
