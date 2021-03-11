import {useState, useEffect} from 'react';


export default function useFetch(url) {
    const [data, setData] =  useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);



    useEffect(() => {
        async function init() {
            try {
                const reponse = await fetch(url);
                if(reponse.ok) {
                    const json = await reponse.json();
                    setData(json.data);
                } else {
                    throw reponse;
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        init();
    }, [url]);

    return {data, error, loading};

}