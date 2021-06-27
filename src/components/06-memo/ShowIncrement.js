import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ShowIncrement = memo(({increment}) => {

    console.log('Me volví a generar :(');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(3);
            }}
        >
            increment
        </button>
    )
});

ShowIncrement.propTypes = {
    increment: PropTypes.func
}

export default ShowIncrement;
