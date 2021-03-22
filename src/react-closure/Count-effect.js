import React, {useState, useRef, useEffect} from 'react';

function CountEffect() {
    console.log('hello');
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    countRef.current = count;
    const incrementCount = () => {
        return setCount((currentCount) => currentCount + 1);
    }
    //
    // const handleAlertClicked = () => {
    //     setTimeout(() => {
    //         alert("You clicked on:" + countRef.current);
    //     }, 3000);
    // }

    useEffect(() => {
        const t = setTimeout(() => {
            alert("You clicked on:" + count);
        }, 3000);
        return () => clearTimeout(t)
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            {/*<button onClick={handleAlertClicked}>Show alert</button>*/}
            <button onClick={incrementCount}>Click me to increment</button>
        </div>
    )
}

export default CountEffect;
