import styled from "styled-components/macro";

const StyledItem = styled.li`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 15px;
  width: 100%;
`;

const ImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 3;

  img {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  grid-area: 1 / 3 / 3 / 6;
`;

export { StyledItem, ImageContainer, InfoContainer };
