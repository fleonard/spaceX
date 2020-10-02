import { useEffect, useRef, useReducer } from "react";
import axios from "axios";

import { hookState, Actions, ActionTypes } from "../types/stateTypes";

export const useSpaceX = (endpoint: string) => {
  const cache = useRef<any>({});

  const url = `https://api.spacexdata.com/v3${endpoint}`;

  const initialState: hookState = {
    data: [],
    error: null,
    status: "idle",
  };

  const [state, dispatch] = useReducer(
    (state: hookState, action: Actions): hookState => {
      switch (action.type) {
        case ActionTypes.FETCHING:
          return { ...initialState, status: "fetching" };
        case ActionTypes.FETCHED:
          return { ...initialState, status: "fetched", data: action.payload };
        case ActionTypes.ERROR:
          return { ...initialState, status: "error", error: action.payload };
        default:
          return state;
      }
    },
    initialState
  );

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: ActionTypes.FETCHING });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: ActionTypes.FETCHED, payload: data });
      } else {
        try {
          const { data } = await axios.get(url);
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: ActionTypes.FETCHED, payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: ActionTypes.ERROR, payload: error.message });
        }
      }
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
