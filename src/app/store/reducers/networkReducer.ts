import * as networkActions from '../actions/network';
import { routerNgProbeToken } from '@angular/router/src/router_module';

export interface State {
  isOnline: boolean;
  serverDown: boolean;
}

export const initialState: State = {
  isOnline: navigator.onLine,
  serverDown: false
};

export function reducer(
  state = initialState,
  action: networkActions.NetworkActions
): State {
  switch (action.type) {
    case networkActions.NetworkActionTypes.SetIsOnline:
      return handleIsOnline(state, action);
    case networkActions.NetworkActionTypes.SetIsServerDown:
      return handleIsServerDown(state, action);
    case networkActions.NetworkActionTypes.PostFailEffect:
      return handlePostFail(state, action);
    default:
      return state;
  }
}

function handlePostFail(
  state: State,
  action: networkActions.PostFailEffect
): State {
  return {
    ...state,
    serverDown: true
  };
}

function handleIsOnline(
  state: State,
  action: networkActions.SetIsOnline
): State {
  return {
    ...state,
    isOnline: action.payload
  };
}

function handleIsServerDown(
  state: State,
  action: networkActions.SetIsServerDown
): State {
  return {
    ...state,
    serverDown: action.payload
  };
}

export const getIsOnline = (state: State) => state.isOnline;

export const getIsServerDown = (state: State) => state.serverDown;
