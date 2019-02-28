import { IPersonState } from 'src/app/state/application-state';
import { PERSON_CHANGED, IPersonChangedAction } from '../actions/person.actions';
import { Action } from '@ngrx/store';



export function personReducer(state: IPersonState, action: Action): IPersonState {
    switch (action.type) {
        case PERSON_CHANGED: {
            const typedAction = action as IPersonChangedAction; // <IPersonChangedAction>
            return { ...state,
                firstName: typedAction.payload.value,
                lastName: typedAction.payload.value,
                email: typedAction.payload.value };
        }
        default: {
            return state;
        }
    }
}