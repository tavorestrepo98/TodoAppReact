import React, { useState } from 'react';

import MultipleCustomeHooks from '../03-examples/MultipleCustomeHooks';

import '../02-useEffects/effects.css'

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomeHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={ () => setShow(!show) }
            >
                Show/Hide
            </button>
        </>
    )
}

export default RealExampleRef;
