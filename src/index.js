import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [
    {
        "resort": "Kirkwood",
        "date": "2020-1-1",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Boreal",
        "date": "2020-1-2",
        "powder": false,
        "backcountry": true
    }
];

const action = {
	type: C.REMOVE_DAY,
	payload: "2020-1-2"
}

const nextState = allSkiDays(state, action)

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)