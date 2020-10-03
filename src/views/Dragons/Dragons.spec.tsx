import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import "jest-styled-components";

import Dragons from "./Dragons";

describe("Dragon Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Dragons />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the dragon list", async () => {
    const { getByText, getAllByTestId } = render(
      <BrowserRouter>
        <Dragons />
      </BrowserRouter>
    );

    await waitFor(() => expect(getAllByTestId("dragon")).toHaveLength(2));
    await waitFor(() => expect(getByText("Dragon 1")).toBeDefined());
    await waitFor(() => expect(getByText("Dragon 2")).toBeDefined());
  });
});
