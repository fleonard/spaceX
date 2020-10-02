import React from "react";

import { CenteredContainer } from "../../globalStyles";

import { StyledSpinner } from "./StyledSpinner";

const Spinner: React.FC = () => {
  return (
    <CenteredContainer>
      <StyledSpinner />
    </CenteredContainer>
  );
};

export default Spinner;
