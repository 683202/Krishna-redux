import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return(
            <React.Fragment>
                <h1>{this.props.countVal}</h1>
                <h1>{this.props.multipliedCount}</h1>
                <button onClick={()=>{
                    this.props.onIncrement();
                }}>Increment</button>
                <button onClick={()=>{
                    this.props.onDecrement();
                }}>Decrement</button>
                <button onClick={()=>{this.props.onDouble();
                }}>Double</button>
            </React.Fragment>
        );
    }
}



export default Counter;