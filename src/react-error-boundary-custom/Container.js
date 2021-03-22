import React from 'react';
import Greeting from "./Greeting";
import Farewell from "./Farewell";
import NoErrorComponent from "./NoErrorComponent";
import ErrorFallback from "./ErrorFallback";


const Container = () => {
    try {
        return (
            <div>
                <NoErrorComponent/>
                <Greeting/>
                <Farewell/>
            </div>
        )
    } catch (error) {
        return <ErrorFallback error={error}/>
    }
}

export default Container;
