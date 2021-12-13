import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import { Wrapper } from './LoginSection.styles';
import { Button } from '../../atoms/FormButton/FormButton';

const LoginSection = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password};

        console.log(user)
    }

    return(
        <Wrapper>
            
            <form onSubmit={handleSubmit}>
                <h1>Zaloguj się</h1>
                <FormField label="E-mail" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormField label="Hasło" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button>Zaloguj się</Button>
            </form>
        </Wrapper>
    )
}

export default LoginSection;