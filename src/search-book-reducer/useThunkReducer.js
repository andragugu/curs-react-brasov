import React, {useReducer} from 'react';
import {isFunction} from "lodash";

export const useThunkReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const enhancedDispatch = React.useCallback(action => {
        console.log(action, 'action-----------------');
        console.log(dispatch, 'dispatch function value');
        if (isFunction(action)) {
            action(dispatch);
        } else {
            dispatch(action);
        }
    }, [dispatch]);
    return [state, enhancedDispatch];
}
