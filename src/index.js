import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';

const initialState = JSON.parse(localStorage['redux-store']) ? // Checks if localStorage is initialized if not sets it to blank
    JSON.parse(localStorage['redux-store']) :
    {}

const store = createStore(appReducer, initialState)

window.store = store; // Sets window.store as store to use it in the console, not safe for production

store.subscribe( () => { console.log(store.getState()) }) // Log to console everytime an Action is dispatched

store.subscribe(() => { // Set state to localStorage everytime an Action is dispatched
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2019-10-29",
        "power": true,
        "backcountry": false
    }
})

store.dispatch({
    type: C.SET_GOAL,
    payload: 2
})