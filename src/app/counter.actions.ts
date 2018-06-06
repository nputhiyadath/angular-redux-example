import { Action, ActionCreator } from 'redux';

export const increment: ActionCreator<Action> = () => ({
    type: 'INCREMENT'
});


export const decrement: ActionCreator<Action> = () => ({
    type: 'DECREMENT'
});


export const reset: ActionCreator<Action> = () => ({
    type: 'RESET'
});
