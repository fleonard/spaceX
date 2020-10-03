import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "jest-styled-components";

import { rocket } from "../../mockData/mockData";

import RocketPage from "./RocketPage";

describe("RocketPage Component", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const state = { item: rocket };
    history.push("/rockets/falcon1", state);

    const { container, getByText, getByTestId } = render(
      <Router history={history}>
        <RocketPage />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Falcon 1")).toBeDefined();
    expect(getByTestId("informations")).toBeDefined();
    expect(getByTestId("overview")).toBeDefined();
    expect(getByTestId("engines")).toBeDefined();
    expect(getByTestId("first-stage")).toBeDefined();
    expect(getByTestId("second-stage")).toBeDefined();
  });
});
