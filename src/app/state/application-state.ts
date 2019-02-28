export interface IApplicationState {
    person?: IPersonState;
}

export interface IPersonState {
    firstName?: string;
    lastName?: string;
    email?: string;
}
