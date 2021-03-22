import React, {useRef, useState} from 'react';
import {useForm} from "./useForm";
import {Hello} from "./Hello";


const App = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const [showHello, setShowHello] = useState(true);

    // setState((state, props) => {
    //     if(state + 1 > 5) {
    //         return;
    //     }
    // })
    const inputRef = useRef();
    const hello = useRef(() => console.log('hello'));


    return (
        <div>
            <>
                <button
                    onClick={() => {
                        inputRef.current.focus();
                    }}>focus input
                </button>
                <input ref={inputRef} value={values.email} onChange={handleChange} placeholder="email" name="email"/>
                <input value={values.firstName} onChange={handleChange} placeholder="first name" name="firstName"/>
                <input value={values.password} onChange={handleChange} placeholder="password" name="password"/>
                <button onClick={() => {
                    hello.current();
                }}>Say hello
                </button>
                <button onClick={() => setShowHello(!showHello)}>
                    toggle
                </button>
                {showHello && <Hello/>}
            </>
        </div>
    )
}

export default App;
