
import axios from 'axios';

function Increment() {
    console.log('Inside increment function in counterActions.js');
    return {
        type:"INCREMENT"
    }
}

function Decrement() {
    return {
        type: "DECREMENT"
    }
}

function Multiply() {
    return {
        type: "MULTIPLY"
    }
}

function IncrementWithDelay() {
    return (dispatch) => {
        axios("https://reqres.in/api/users?delay=3",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (response)=>{
                console.log(response);
                dispatch(Increment());
            }
        )
    }
}
export {IncrementWithDelay, Decrement, Multiply};