import styled from "styled-components/macro";
import { Table } from "@material-ui/core";

const StyledSection = styled.section`
  border-bottom: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
  padding: 25px 0;

  &:first-child {
    padding-top: 25px;
  }

  &:last-child {
    border: 0;
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
    flex-direction: row;
    padding: 80px 0;
  }
`;

const ImageContainer = styled.div`
  display: block;
  padding-bottom: 20px;
  text-align: center;
  width: 100%;

  img {
    height: auto;
    max-width: 600px;
    width: 100%;
  }

  @media (min-width: 1000px) {
    padding-bottom: 0;
    padding-right: 20px;
  }
`;

const InfoContainer = styled.div`
  padding-bottom: 20px;
  width: 100%;

  a:hover {
    text-decoration: underline;
  }

  table span {
    color: #868686;
  }

  @media (min-width: 1000px) {
    padding-bottom: 0px;
    padding-right: 20px;
  }
`;

const StyledTable = styled(Table)`
  && {
    margin-bottom: 20px;
  }
`;

export { StyledSection, ImageContainer, InfoContainer, StyledTable };
