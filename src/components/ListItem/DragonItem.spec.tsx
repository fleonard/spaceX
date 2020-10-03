import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { dragon } from "../../mockData/mockData";

import DragonItem from "./DragonItem";

describe("DragonItem Component", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <DragonItem item={dragon} />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Dragon 1")).toBeDefined();
  });
});
