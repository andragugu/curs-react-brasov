import React, {useState, useRef} from 'react';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import ErrorComponent from "./ErrorComponent";

const Container = () => {
    const [username, setUsername] = useState('');
    const usernameRef = useRef(null);

    return (
        <div>
            <label>
                {`Username (don't type error):`}
                <input placeholder={`type "error"`}
                       value={username}
                       onChange={e => setUsername(e.target.value)}
                       ref={usernameRef}
                />
            </label>
            <div>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        setUsername('')
                        usernameRef.current.focus()
                    }}>
                    <ErrorComponent username={username}/>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default Container;
