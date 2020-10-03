import { SpaceXType } from "./apiTypes";

export interface hookState {
  data: SpaceXType;
  error: null | string;
  status: string;
}

export enum ActionTypes {
  ERROR = "ERROR",
  FETCHED = "FETCHED",
  FETCHING = "FETCHING",
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
