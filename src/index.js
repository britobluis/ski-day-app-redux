import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';
import { createStore } from 'redux';

const store = createStore(appReducer, initialState)

console.log(`initial state:`, store.getState())

store.dispatch({ // dispatch() is used to mutate state
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2020-01-06",
        "powder": false,
        "backcountry": true
    }
})

console.log(`next state:`, (store.getState()))