import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';

import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEffects/effects.css'

const MemoHook = () => {

    const { state:counter, increment } = useCounter(1000);
    const [ show, setShow ] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small> </h3> 
            <hr />

            <p>{memoProcesoPesado}</p>

            <button 
                className="btn btn-primary" 
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary m-3"
                onClick={() => setShow(!show)}
            >
                show/hide { JSON.stringify(show) }
            </button>
        </>
    )   
}

export default MemoHook;
