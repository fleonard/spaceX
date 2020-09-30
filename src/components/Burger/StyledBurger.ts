import styled from "styled-components/macro";

interface BurgerProps {
  readonly open: boolean;
}

const StyledBurger = styled.div<BurgerProps>`
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    :first-child {
      top: ${({ open }) => (open ? "15px" : "0px")};
      transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      top: 13px;
      opacity: ${({ open }) => (open ? "0" : "1")};
      left: ${({ open }) => (open ? "-60px" : "0")};
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
