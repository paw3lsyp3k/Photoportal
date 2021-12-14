import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import { Wrapper } from './LoginSection.styles';
import { Button } from '../../atoms/FormButton/FormButton';

const LoginSection = () => {

    const[formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {...formValues};

        console.log(user)
    }

    const handleInputCHange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value,
        })
    }

    return(
        <Wrapper>
            
            <form onSubmit={handleSubmit}>
                <h1>Zaloguj się</h1>
                <FormField label="E-mail" id="email" name="email" value={formValues.email} onChange={handleInputCHange}/>
                <FormField label="Hasło" type="password" id="password" name="password" value={formValues.password} onChange={handleInputCHange}/>
                <Button>Zaloguj się</Button>
            </form>
        </Wrapper>
    )
}

export default LoginSection;