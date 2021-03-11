import React, {useReducer} from 'react';


function countReducer(state, action) {
    const {type, step} = action;
    console.log(type, step, 'action called');
    switch (type) {
        case 'increment': {
            return {
                ...state,
                count: state.count + step
            }
        }

        default: {
            throw new Error(`Unsupported action type: ${action.type}`)
        }
    }
}

const ReducerExample4 = ({initialCount = 0, step = 10}) => {
    const [state, dispatch] = useReducer(countReducer, {
        count: initialCount
    })

    const {count} = state;


    const increment = () => dispatch({type: 'increment', step})
    return <button onClick={increment}>{count}</button>
}

export default ReducerExample4;

