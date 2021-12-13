import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import { Wrapper } from '../LoginSection/LoginSection.styles';
import { Button } from '../../atoms/FormButton/FormButton';

const RegistrationSection = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[phone, setphone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, phone, password};

        console.log(user)
    }

    return(
        <Wrapper>
            
            <form onSubmit={handleSubmit}>
                <h1>Zarejestruj się</h1>
                <FormField label="E-mail" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormField label="Telefon" id="phone" name="phone" value={phone} onChange={(e) =>  setphone(e.target.value)}/>
                <FormField label="Hasło" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button>Zarejestruj się</Button>
            </form>
        </Wrapper>
    )
}

export default RegistrationSection;