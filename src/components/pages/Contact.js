import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

//React.Activity15/16
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            setErrorMessage('Email, message or Username is invalid.')

            return;
        }
        alert(`Message sent successfully, thanks ${name}`)
    }

    return (
        <div className='container'>
            <h2>Contact Form</h2>
            <form>
                <label for='inputName'>Name</label>
                <input className='form-control' 
                value={name} 
                name='name' 
                onChange={handleInputChange}
                type='text'
                placeholder='name'
                id='inputName' />
                <label for='inputEmail'>Email</label>
                <input className='form-control'
                value={email}
                name='email'
                onChange={handleInputChange}
                type='text'
                placeholder='email'
                id='inputEmail' />
                <div class='form-group'>
                    <label>Message</label>
                    <textarea class='form-control'
                    rows='10'
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='message'
                    id='inputMessage'> </textarea>
                </div>
                <button className='btn btn-primary' type='button' onClick={handleFormSubmit}>Submit Form</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;