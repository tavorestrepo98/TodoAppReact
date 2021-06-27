import React, { useEffect } from 'react';
import './effects.css';

import { useForm } from '../../hooks/useForm';

const FormWithCustomeHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const { name, email, password } = formValues;

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    useEffect(() => {
        console.log('Email cambió');
    }, [email]);

    return (
        <form onSubmit={ handleOnSubmit }>
            <h1>FormWithCustomeHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="***********"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>           

            <button
                type="submit"
                className="btn btn-primary">
                Guardar
            </button> 

        </ form>
    );
}

export default FormWithCustomeHook;
