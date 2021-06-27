import React, { Fragment, useState, useCallback } from 'react';

import '../02-useEffects/effects.css'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter+1);
    // }

    const increment = useCallback((num) => {
        setCounter(c => c+num);
    }, [setCounter])


    return (
        <Fragment>
            <h1>Usecallback hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />
        </Fragment>
    )
}

export default CallbackHook;
