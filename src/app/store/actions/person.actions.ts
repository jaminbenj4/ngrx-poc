import { Action } from '@ngrx/store';

export const PERSON_CHANGED = 'PERSON_CHANGED';

export interface IPersonChangedAction extends Action {
    payload: {
        value: string;
    };
}

export function personChanged(value: string) {
    return {
        type: PERSON_CHANGED,
        payload: {
            value
        }
    };
}
