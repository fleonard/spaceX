import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "jest-styled-components";

import { dragon } from "../../mockData/mockData";

import DragonPage from "./DragonPage";

describe("DragonPage Component", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const state = { item: dragon };
    history.push("/dragons/dragon1", state);

    const { container, getByText, getByTestId } = render(
      <Router history={history}>
        <DragonPage />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Dragon 1")).toBeDefined();
    expect(getByTestId("informations")).toBeDefined();
    expect(getByTestId("overview")).toBeDefined();
    expect(getByTestId("trunk")).toBeDefined();
    expect(getByTestId("heat-shield")).toBeDefined();
    expect(getByTestId("thrusters")).toBeDefined();
  });
});
