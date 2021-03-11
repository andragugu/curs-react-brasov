// import * as React from 'react';
import React, {useReducer} from 'react';

const countReducer = (count, change) => count + change


const ReducerExample = ({initialCount = 0, step = 1}) => {
    const [count, changeCount] = useReducer(countReducer, initialCount)

    const increment = () => changeCount(step)

    return <button onClick={increment}>{count}</button>
}

export default ReducerExample;
