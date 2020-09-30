import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { useClickOutside } from "../../hooks/useClickOutside";

import { ReactComponent as Logo } from "../../images/spacex-logo.svg";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

import { StyledNavContainer, StyledNav, NavItem } from "./StyledNav";

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useClickOutside(node, () => setOpen(false));

  return (
    <StyledNavContainer ref={node}>
      <Logo />
      <Burger open={open} setOpen={setOpen} aria-controls="mobile-menu" />
      <StyledNav>
        <NavItem component="li">
          <NavLink to="/rockets">Rockets</NavLink>
        </NavItem>
        <NavItem component="li">
          <NavLink to="/dragons">Dragons</NavLink>
        </NavItem>
      </StyledNav>
      <Menu open={open} id="mobile-menu" />
    </StyledNavContainer>
  );
};

export default Nav;
