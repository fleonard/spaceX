import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Menu from "./Menu";

describe("Menu Component", () => {
  it("renders when closed", () => {
    const { container } = render(
      <BrowserRouter>
        <Menu open={false} id="mobile-menu" />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders when open", () => {
    const { container } = render(
      <BrowserRouter>
        <Menu open={true} id="mobile-menu" />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
