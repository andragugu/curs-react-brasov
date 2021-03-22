import React from 'react';
import ErrorFallback from "./ErrorFallback";

const Farewell = ({subject}) => {
    // try {
    //     return <div>Goodbye {subject.toUpperCase()}</div>;
    // } catch (error) {
    //     return <ErrorFallback error={error}/>
    // }
    return <div>Goodbye {subject.toUpperCase()}</div>;
}

export default Farewell;
