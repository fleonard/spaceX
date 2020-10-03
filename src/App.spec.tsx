import React from "react";
import { render, waitFor } from "@testing-library/react";
import "jest-styled-components";

import App from "./App";

describe("Application Component", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the rocket list as default page", async () => {
    const { getByText } = render(<App />);

    await waitFor(() => expect(getByText("Falcon 1")).toBeDefined());
    await waitFor(() => expect(getByText("Falcon 9")).toBeDefined());
    await waitFor(() => expect(getByText("Falcon Heavy")).toBeDefined());
    await waitFor(() => expect(getByText("Starship")).toBeDefined());
  });
});
