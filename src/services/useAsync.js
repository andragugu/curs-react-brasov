import {asyncReducer} from "./asyncReducer";
import {useReducer, useEffect} from 'react';

export function useAsync(asyncCallback, initialState, dependencies) {
    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'idle',
        data: null,
        error: null,
        ...initialState
    });


    useEffect(() => {
        const promise = asyncCallback();

        if (!promise) {
            return;
        }

        dispatch({
            type: 'pending'
        });

        promise.then(
            response => {
                dispatch({
                    type: 'resolved',
                    data: response
                });
            }, error => {
                dispatch({
                    type: 'rejected',
                    error
                });
            }
        )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies])

    return state;
}
