import React from "react";
import { AlertTitle } from "@material-ui/lab";

import { CenteredContainer } from "../../globalStyles";

import { StyledAlert } from "./StyledError";

interface ErrorProps {
  text: string | null;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <CenteredContainer>
      <StyledAlert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>{text}</strong>
      </StyledAlert>
    </CenteredContainer>
  );
};

export default Error;
