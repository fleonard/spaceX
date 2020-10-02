import styled from "styled-components/macro";

interface BurgerProps {
  readonly open: boolean;
}

const StyledBurger = styled.div<BurgerProps>`
  cursor: pointer;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 30px;

  span {
    background: #fff;
    border-radius: 9px;
    display: block;
    height: 4px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;

    :first-child {
      top: ${({ open }) => (open ? "15px" : "0px")};
      transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      left: ${({ open }) => (open ? "-60px" : "0")};
      opacity: ${({ open }) => (open ? "0" : "1")};
      top: 13px;
    }
    :nth-child(3) {
      top: ${({ open }) => (open ? "15px" : "25px")};
      transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export { StyledBurger };
