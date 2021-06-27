import React, { useEffect, useState } from 'react';

import Messaje from './Messaje';

import './effects.css';

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey');
    }, []);

    useEffect(() => {
    }, [formState]);

    useEffect(() => {
    }, [email]);

    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>
            

            { (name === '123') && <Messaje /> }

        </>
    );
}

export default SimpleForm;
