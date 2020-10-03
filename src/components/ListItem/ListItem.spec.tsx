import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { rocket, dragon } from "../../mockData/mockData";

import ListItem from "./ListItem";

describe("ListItem Component", () => {
  it("renders the Rocket component if rocket data has been passed as an item", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ListItem item={rocket} />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Falcon 1")).toBeDefined();
  });

  it("renders the Dragon component if dragon data has been passed as an item", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ListItem item={dragon} />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Dragon 1")).toBeDefined();
  });
});
