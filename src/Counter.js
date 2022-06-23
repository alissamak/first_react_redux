import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';

const Counter = () => {
    //calling useSelector to grab current value of stat variable from the store
    const count = useSelector((state) => state.counter.value);
    //dispatch hook
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);
    
    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Counter;