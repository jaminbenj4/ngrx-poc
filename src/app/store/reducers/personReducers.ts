import { IPersonState, IApplicationState } from 'src/app/state/application-state';
import * as personActions from '../actions/person.actions';
import { Action } from '@ngrx/store';



export function personReducer(state: IPersonState, action: Action): IPersonState {
    switch (action.type) {
        case personActions.PERSON_CHANGED: {
            const typedAction = action as personActions.IPersonChangedAction; // <IPersonChangedAction>
            return { ...state,
                firstName: typedAction.payload.value,
                lastName: typedAction.payload.value,
                email: typedAction.payload.value };
        }
        case personActions.SET_PERSON: {
            const typedAction = action as personActions.SetPerson;
            return handlePersonSubmitted(state, typedAction);
        }
        default: {
            return state;
        }
    }

}

function handlePersonSubmitted(personState: IPersonState, pAction: personActions.SetPerson): IPersonState {
    return {...personState, firstName: pAction.payload.firstName, lastName: pAction.payload.lastName, email: pAction.payload.email };
}

export const getSubmittedPerson = (personState: IPersonState) => personState;
