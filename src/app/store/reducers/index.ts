import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromNetwork from './networkReducer';
import * as fromPerson from './personReducers';
import * as fromAppState from '../../state/application-state';

export interface State {
  network: fromNetwork.State;
  personState: fromAppState.IPersonState;
}

export const reducers: ActionReducerMap<State> = {
  network: fromNetwork.reducer,
  personState: fromPerson.personReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getNetworkState = createFeatureSelector<fromNetwork.State>(
  'network'
);

export const selectPersonState = createFeatureSelector<fromAppState.IPersonState>(
  'person'
);

export const getPersonState = createSelector(
  selectPersonState,
  fromPerson.getSubmittedPerson
);

export const getIsOnline = createSelector(
  getNetworkState,
  fromNetwork.getIsOnline
);

export const getIsServerDown = createSelector(
  getNetworkState,
  fromNetwork.getIsServerDown
);
