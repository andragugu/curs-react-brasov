import React from 'react';
import ErrorFallback from "./ErrorFallback";

const Greeting = ({subject}) => {
    // try {
    //     return <div>Hello {subject.toUpperCase()}</div>;
    // } catch (error) {
    //     return <ErrorFallback error={error}/>
    // }
    return <div>Hello {subject.toUpperCase()}</div>;
}

export default Greeting;
