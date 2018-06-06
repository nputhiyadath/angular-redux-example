/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { AppState } from './app.state';

const initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
    (state = initialState, action: Action): AppState => {
        switch (action.type) {
            case 'INCREMENT':
                return Object.assign({}, state, { counter: state.counter + 1 });
            case 'DECREMENT':
                return Object.assign({}, state, { counter: state.counter - 1 });
            case 'RESET':
                return Object.assign({}, state, { counter: 0 });
            default:
                return state;
        }
    };
