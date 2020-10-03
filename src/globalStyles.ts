import styled, { createGlobalStyle } from "styled-components/macro";
import { List } from "@material-ui/core";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
    text-transform: uppercase;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

const CenteredContainer = styled.div`
  display: grid;
  padding: 30px 0;
  place-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`;

const ListWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  padding-top: 25px;

  a {
    border-radius: 6px;
    border: 1px solid #dadce0;
    margin: 5px;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media (min-width: 1200px) {
      a {
        &:hover {
          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
            0px 3px 4px 0px rgba(0, 0, 0, 0.14),
            0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        }
      }
    }
  }
`;

export { GlobalStyles, CenteredContainer, ColumnContainer, ListWrapper };
