import {asyncReducer} from "./asyncReducer";
import {useReducer, useEffect} from 'react';

export function useAsync2(asyncCallback, initialState) {
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
    }, [asyncCallback])

    return state;
}
