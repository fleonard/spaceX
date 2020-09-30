import React from "react";
import { NavLink } from "react-router-dom";

import { StyledMenuContainer, StyledMenu, MenuItem } from "./StyledMenu";

interface MenuProps {
  open: boolean;
  id: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenuContainer open={open} aria-hidden={!isHidden} {...props}>
      <StyledMenu>
        <MenuItem component="li">
          <NavLink to="/rockets">Rockets</NavLink>
        </MenuItem>
        <MenuItem component="li">
          <NavLink to="/dragons">Dragons</NavLink>
        </MenuItem>
      </StyledMenu>
    </StyledMenuContainer>
  );
};

export default Menu;
