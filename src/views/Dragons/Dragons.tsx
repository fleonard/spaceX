import React from "react";

import { Typography } from "@material-ui/core";

import { useSpaceX } from "../../hooks/useSpaceX";

import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import ListItem from "../../components/ListItem/ListItem";

import { ColumnContainer, ListWrapper } from "../../globalStyles";

const Dragons: React.FC = () => {
  const { data, error, status } = useSpaceX("/dragons");

  return (
    <ColumnContainer>
      <Typography variant="h4">Dragons</Typography>

      {status === "fetching" && <Spinner />}

      {status === "error" && <Error text={error} />}

      {status === "fetched" && (
        <ListWrapper>
          {data.map((dragon) => (
            <ListItem key={dragon.id} item={dragon} />
          ))}
        </ListWrapper>
      )}
    </ColumnContainer>
  );
};

export default Dragons;
