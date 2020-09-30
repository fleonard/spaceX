import styled from "styled-components/macro";

import { Box, List } from "@material-ui/core";

interface MenuProps {
  readonly open: boolean;
}

const StyledMenuContainer = styled(Box)<MenuProps>`
  background: #000;
  color: #fff;
  height: calc(100vh - 60px);
  padding: 20px;
  position: absolute;
  right: 0;
  top: 60px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  width: 270px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledMenu = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: right;
`;

const MenuItem = styled(Box)`
  display: flex;
  padding-top: 10px;
  width: 100%;

  a {
    border-bottom: 1pt solid #252525;
    color: #fff;
    padding: 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
  }
`;

export { StyledMenuContainer, StyledMenu, MenuItem };
