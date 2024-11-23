'use client'
import React, { useState, useMemo, memo } from 'react';

// A functional component that utilizes memoization
const MemoizedComponent = memo(() => {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState('');

    // Function to calculate factorial (expensive operation)
    const calculateFactorial = (num) => {
        console.log("Calculating factorial...");
        return num <= 0 ? 1 : num * calculateFactorial(num - 1);
    };

    // Memoizing the factorial calculation
    const factorial = useMemo(() => calculateFactorial(number), [number]);

    return (
        <div className='mt-44'>
            <h1>Memoization Example</h1>
            <div>
                <label>
                    Enter a number to calculate its factorial:
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <h2>Factorial of {number} is {factorial}</h2>
            </div>
            <div>
                <label>
                    Type something:
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <p>You typed: {text}</p>
            </div>
        </div>
    );
});

export default MemoizedComponent;