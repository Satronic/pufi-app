import React from 'react';
import { useState } from 'react';
import './NewsletterForm.css'


function NewsletterForm() {
    const [inputForm, setInputForm] = useState({
        state: 'initial',
        email: ''
    });

    const [stateForm, setStateForm] = useState({
        state: 'initial',
        message: ''
    })


    function onChangeForm(event){
        let name = event.target.name;
        let value = event.target.value;

        let emailRegex = /^[-\w.%+]{3,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 
        let test = emailRegex.test(value);

        console.log(test)

        if(value.length === 0){
            return setStateForm({
                state: 'initial',
                message: ''
            })
        }

        if(!test){
            setStateForm({
                state: 'invalid-email',
                message: 'Invalid Email'
            })
            return;
        }
        
        setStateForm({
            state: 'valid-email',
            message: 'Valid Email'
        })
        setInputForm({
            [name]: value
        })
    }

    function onSubmitForm(event){
        event.preventDefault();
    }

    return (
        <>
            <form className="newsletter-form" onSubmit={onSubmitForm}>
                <fieldset className={stateForm.state}>
                    <legend>{stateForm.message}</legend>
                    <input
                        id="email"
                        type="text" 
                        name="email"
                        className="form-input-email"
                        placeholder="Ingresa tu e-mail"
                        onChange={onChangeForm}
                    />
                
                    <button className="form-button-submit" type="submit">
                        ENVIAR
                    </button>
                </fieldset>
                
            </form>
        </>
    );
}

export default NewsletterForm;