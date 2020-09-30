import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Nav from "./Nav";

describe("Nav Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
