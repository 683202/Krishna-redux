
import {createStore} from 'redux';

// reducer

var reducer = (state = {
    count: 0
},action)=>{
    let currentVal = state.count;
    switch(action.type) {
        case "INCREMENT":
            console.log("Inside Reducer index.js");
            return Object.assign({}, state, {count:currentVal + 1});
        case "DECREMENT":
            return Object.assign({}, state, {count:currentVal - 1});
        default:
            return state;
    }
}


//store

// var store = createStore(reducer);
// store.subscribe(()=>{
//     console.log("Store Changed", store.getState());
// });


// //actions

// store.dispatch({type:"INCREMENT", step:2});
// store.dispatch({type:"INCREMENT", step:2});
// store.dispatch({type:"DECREMENT", step:2});
// store.dispatch({type:"INCREMENT", step:2});
// store.dispatch({type:"INCREMENT", step:2});
// store.dispatch({type:"DECREMENT", step:2});


export default reducer;