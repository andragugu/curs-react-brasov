import React, {useReducer} from 'react';

const countReducer = (state, action) => ({
    ...state,
    ...(typeof action === 'function' ? action(state) : action)
})


const ReducerExample3 = ({initialCount = 0, step = 5}) => {
    const [state, setState] = useReducer(countReducer, {
        count: initialCount
    })

    const {count} = state;

    const increment = () => setState(currentState => ({count: currentState.count + step}))
    return <button onClick={increment}>{count}</button>
}

export default ReducerExample3;

