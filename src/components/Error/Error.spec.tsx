import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Error from "./Error";

describe("Dragon Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Error text={"There's been an issue with your data."} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the dragon list", async () => {
    const { getByText } = render(
      <Error text={"There's been an issue with your data."} />
    );

    expect(getByText("There's been an issue with your data.")).toBeDefined();
  });
});
