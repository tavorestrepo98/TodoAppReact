import React from 'react';
import { Small } from './Small';

import { useCounter } from '../../hooks/useCounter';

import '../02-useEffects/effects.css'

const Memorize = () => {

    const { state:counter, increment } = useCounter(1);

    return (
        <>
            <h1>Counter <Small value={counter} /> </h1> 
            <hr />

            <button className="btn btn-primary" onClick={() => increment()}>
                +1
            </button>
        </>
    )   
}

export default Memorize;
