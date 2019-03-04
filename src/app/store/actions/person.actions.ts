import { Action } from '@ngrx/store';
import { IPersonState } from 'src/app/state/application-state';

export const PERSON_CHANGED = 'PERSON_CHANGED';
export const SET_PERSON = 'SET_PERSON';

export interface IPersonChangedAction extends Action {
    payload: {
        value: string;
    };
}

export class SetPerson implements Action {
        readonly type = SET_PERSON;
        constructor(public payload: IPersonState) {}
}

export function personChanged(value: string) {
    return {
        type: PERSON_CHANGED,
        payload: {
            value
        }
    };
}
