import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import "jest-styled-components";

import Rockets from "./Rockets";

describe("Rockets Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the rockets list", async () => {
    const { getByText, getAllByTestId } = render(
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>
    );

    await waitFor(() => expect(getAllByTestId("rocket")).toHaveLength(4));
    await waitFor(() => expect(getByText("Falcon 1")).toBeDefined());
    await waitFor(() => expect(getByText("Falcon 9")).toBeDefined());
    await waitFor(() => expect(getByText("Falcon Heavy")).toBeDefined());
    await waitFor(() => expect(getByText("Starship")).toBeDefined());
  });
});
