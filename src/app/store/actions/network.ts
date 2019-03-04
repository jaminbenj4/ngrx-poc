import { Action } from '@ngrx/store';
import { Person } from 'src/app/person/person';

export enum NetworkActionTypes {
  StartOnlineOfflineCheck = '[Network] StartOnlineOfflineCheck',
  SetIsOnline = '[Network] SetIsOnline',
  PingServer = '[Network] PingServer',
  SetIsServerDown = '[Network] SetIsServerDown',
  PostFail = '[Network] PostFail',
  PostFailEffect = '[Network] PostFailEffect'
}

export class StartOnlineOfflineCheck implements Action {
  readonly type = NetworkActionTypes.StartOnlineOfflineCheck;
}

export class SetIsOnline implements Action {
  readonly type = NetworkActionTypes.SetIsOnline;

  constructor(public payload: boolean) {}
}

export class PingServer implements Action {
  readonly type = NetworkActionTypes.PingServer;

  constructor(public payload: Person) {}
}

export class SetIsServerDown implements Action {
  readonly type = NetworkActionTypes.SetIsServerDown;

  constructor(public payload: boolean) {}
}

export class PostFail implements Action {
  readonly type = NetworkActionTypes.PostFail;
}

export class PostFailEffect implements Action {
  readonly type = NetworkActionTypes.PostFailEffect;
}

export type NetworkActions = StartOnlineOfflineCheck | SetIsOnline | PingServer | SetIsServerDown | PostFail | PostFailEffect;
