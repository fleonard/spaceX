import { SpaceXType } from "./apiTypes";

export interface hookState {
  status: string;
  error: null | string;
  data: SpaceXType;
}

export enum ActionTypes {
  FETCHING = "FETCHING",
  FETCHED = "FETCHED",
  ERROR = "ERROR",
}

interface BaseAction {
  type: ActionTypes;
}

export interface FetchingData extends BaseAction {
  type: ActionTypes.FETCHING;
}

export interface FetchedData extends BaseAction {
  type: ActionTypes.FETCHED;
  payload: SpaceXType;
}

export interface DataError extends BaseAction {
  type: ActionTypes.ERROR;
  payload: string;
}

export type Actions = FetchingData | FetchedData | DataError;
