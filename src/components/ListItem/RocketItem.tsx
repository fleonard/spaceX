import React from "react";
import { Link } from "react-router-dom";

import { Rocket } from "../../types/apiTypes";

import { StyledItem, ImageContainer, InfoContainer } from "./StyledListItem";

interface RocketProps {
  item: Rocket;
}

const RocketItem: React.FC<RocketProps> = ({ item }) => {
  return (
    <Link
      to={{
        pathname: `/rockets/${item.rocket_id}`,
        state: { item: item },
      }}
    >
      <StyledItem data-testid="rocket">
        <ImageContainer>
          <img src={item.flickr_images[0]} alt={item.rocket_name} />
        </ImageContainer>
        <InfoContainer>
          <h2>{item.rocket_name}</h2>
          <p>{item.description}</p>
          <p>Learn more...</p>
        </InfoContainer>
      </StyledItem>
    </Link>
  );
};

export default RocketItem;
