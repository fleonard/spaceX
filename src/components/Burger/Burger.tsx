import * as React from "react";

import { StyledBurger } from "./StyledBurger";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FunctionComponent<BurgerProps> = ({
  open,
  setOpen,
  ...props
}) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
