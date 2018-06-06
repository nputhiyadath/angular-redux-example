import {Component, Inject} from '@angular/core';
import {Store} from 'redux';
import {AppStore} from './app.store';
import {AppState} from './app.state';
import * as CounterActions from './counter.actions';
import * as CounterReducer from './counter.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    counter: number;

    constructor(@Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => {
            // Only on reload
            this.reloadState();
        });
        this.loadState();
    }

    loadState() {
        const state: AppState = this.store.getState() as AppState;
        this.counter = state.counter;
    }

    reloadState() {
        this.loadState();
    }

    increment() {
        this.store.dispatch(CounterActions.increment());
    }

    decrement() {
        this.store.dispatch(CounterActions.decrement());
    }

    reset() {
        this.store.dispatch(CounterActions.reset());
        // Unorthodox and frowned up way of calling counter and setting value :)
        /*
        let state = CounterReducer.counterReducer(this.store.getState(), { type: 'RESET' });
        this.counter = state.counter;
        */
    }
}
