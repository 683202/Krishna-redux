import {connect} from 'react-redux';
import Counter from '../Components/Counter';
import { Increment, Decrement, Multiply, IncrementWithDelay } from '../Components/Actions/CounterActions';

var mapStateToProps=(state)=> {
    console.log(state);
    return {
        countVal:state.first.count,
        multipliedCount:state.second.multipliedCount
    }
}

var mapDispatchToProps=(dispatch)=>{
    return {
        onIncrement:()=>{
            dispatch(IncrementWithDelay());
        },
        onDecrement:()=>{
            dispatch(Decrement());
        },
        onDouble:() => {
            console.log('inside doubling');
            dispatch(Multiply());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);