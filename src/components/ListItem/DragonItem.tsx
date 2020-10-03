import React from "react";
import { Link } from "react-router-dom";

import { Dragon } from "../../types/apiTypes";

import { StyledItem, ImageContainer, InfoContainer } from "./StyledListItem";

interface DragonProps {
  item: Dragon;
}

const DragonItem: React.FC<DragonProps> = ({ item }) => {
  return (
    <Link
      to={{
        pathname: `/dragons/${item.id}`,
        state: { item: item },
      }}
    >
      <StyledItem data-testid="dragon">
        <ImageContainer>
          <img src={item.flickr_images[0]} alt="{item.name}" />
        </ImageContainer>
        <InfoContainer>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Learn more...</p>
        </InfoContainer>
      </StyledItem>
    </Link>
  );
};

export default DragonItem;
