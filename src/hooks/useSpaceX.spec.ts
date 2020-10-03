import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { renderHook } from "@testing-library/react-hooks";

import { rocket } from "../mockData/mockData";

import { useSpaceX } from "./useSpaceX";

describe("useSpaceX hook", () => {
  it("fetch data based on the url provided and update the status", async () => {
    const mock = new MockAdapter(axios);
    const mockData = [rocket, rocket];
    const url = "/rockets";
    mock.onGet(`https://api.spacexdata.com/v3${url}`).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useSpaceX(url));

    expect(result.current.data).toEqual([]);
    expect(result.current.status).toEqual("fetching");

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.status).toEqual("fetched");
  });

  it("update correctly the state when error happens", async () => {
    const mock = new MockAdapter(axios);
    const url = "/rockets";
    mock.onGet(`https://api.spacexdata.com/v3${url}`).networkError();

    const { result, waitForNextUpdate } = renderHook(() => useSpaceX(url));

    expect(result.current.data).toEqual([]);
    expect(result.current.status).toEqual("fetching");

    await waitForNextUpdate();

    expect(result.current.error).toEqual("Network Error");
    expect(result.current.status).toEqual("error");
  });
});
