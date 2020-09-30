import styled from "styled-components/macro";
import { Box, List } from "@material-ui/core";

const StyledNavContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  position: relative;

  svg {
    display: block;
    fill: #fff;
    height: auto;
    width: 200px;
  }
`;

const StyledNav = styled(List)`
  display: none;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled(Box)`
  align-items: stretch;
  box-sizing: content-box;
  padding: 0 10px;

  a {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s;

    &::after {
      background: #fff;
      bottom: 0;
      color: transparent;
      content: ".";
      height: 1px;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      transition: all 0.5s;
      width: 0%;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;

export { StyledNavContainer, StyledNav, NavItem };
