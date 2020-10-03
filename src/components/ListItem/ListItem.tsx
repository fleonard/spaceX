import React from "react";

import { Rocket, Dragon } from "../../types/apiTypes";

import DragonItem from "./DragonItem";
import RocketItem from "./RocketItem";

interface ComponentProps {
  item: Rocket | Dragon;
}

const ListItem: React.FC<ComponentProps> = ({ item }) => {
  const isRocket = () => {
    return (item as Rocket).rocket_id !== undefined;
  };

  return isRocket() ? (
    <RocketItem item={item as Rocket} />
  ) : (
    <DragonItem item={item as Dragon} />
  );
};

export default ListItem;
