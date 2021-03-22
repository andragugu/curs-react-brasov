import React, {useState} from 'react';

function Count() {
    console.log('hello');
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        return setCount((currentCount) => currentCount + 1);
    }

    const handleAlertClicked = () => {
        setTimeout(() => {
            alert("You clicked on:" + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleAlertClicked}>Show alert</button>
            <button onClick={incrementCount}>Click me to increment</button>
        </div>
    )
}

export default Count;
