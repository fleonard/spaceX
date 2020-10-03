import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { rocket } from "../../mockData/mockData";

import RocketItem from "./RocketItem";

describe("RocketItem Component", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <RocketItem item={rocket} />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Falcon 1")).toBeDefined();
  });
});
