import React, { useRef } from 'react';

import '../02-useEffects/effects.css';

const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-2"
                onClick={handleClick}>
                Focus
            </button>
        </>
    )
}

export default FocusScreen;
