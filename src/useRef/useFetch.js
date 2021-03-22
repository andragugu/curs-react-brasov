import {useEffect, useState, useRef} from "react";

export const useFetch = url => {
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));

        fetch(url)
            .then(x => x.text())
            .then(data => {
                setState({data, loading: false})
            })
    }, [url])
    return state;
}
