/**
 * Created by Lam on 16/11/18.
 */
import { INCREASE } from '../actions/action.js';

function Counter(state, action) {
    switch (action.type) {
        case INCREASE : return state = {count : ++state.count};
        default : return state;
    }
}

let initState = {
    data1:{
        count:0
    }
}

export default function toApp(state = initState,action) {
    return {
        data1: Counter(state.data1, action),
    }
}