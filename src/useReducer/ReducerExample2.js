import React, {useReducer} from 'react';


const countReducer = (state, action) => ({...state, ...action})

const ReducerExample2 = ({initialCount = 0, step = 4}) => {


    const [state, setState] = useReducer(countReducer, {
        count: initialCount,
        isValid: true
    })
    const {count} = state;
    const increment = () => setState({count: count + step})

    return <button onClick={increment}>{count}</button>
}

export default ReducerExample2;
