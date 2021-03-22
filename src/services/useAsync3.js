import {asyncReducer} from "./asyncReducer";
import {useReducer, useCallback} from 'react';

export function useAsync3(initialState) {
    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'idle',
        data: null,
        error: null,
        ...initialState
    });

    const {data, error, status} = state;

    const run = useCallback(promise => {
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

    }, [])

    return {error, status, data, run};
}
