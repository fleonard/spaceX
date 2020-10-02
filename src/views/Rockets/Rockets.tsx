import React from "react";

import { Typography } from "@material-ui/core";

import { useSpaceX } from "../../hooks/useSpaceX";

import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import ListItem from "../../components/ListItem/ListItem";

import { ColumnContainer, ListWrapper } from "../../globalStyles";

const Rockets: React.FC = () => {
  const { data, error, status } = useSpaceX("/rockets");

  return (
    <ColumnContainer>
      <Typography variant="h4">Rockets</Typography>

      {status === "fetching" && <Spinner />}

      {status === "error" && <Error text={error} />}

      {status === "fetched" && (
        <ListWrapper>
          {data.map((rocket) => (
            <ListItem key={rocket.rocket_id} item={rocket} />
          ))}
        </ListWrapper>
      )}
    </ColumnContainer>
  );
};

export default Rockets;
