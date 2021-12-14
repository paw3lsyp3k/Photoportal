import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import { Wrapper } from '../LoginSection/LoginSection.styles';
import { Button } from '../../atoms/FormButton/FormButton';

const initialFormState = {
    email: '',
    phone: '',
    password: '',
    rpassword: '',
}

const RegistrationSection = () => {

    const[formValues, setFormValues] = useState(initialFormState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {...formValues,
        email: formValues.email,
        phone: formValues.phone,
        password: formValues.password,
        rpassword: formValues.rpassword,
        }
        console.log(newUser)
        setFormValues(initialFormState)
    }

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value,
        })
    }

    return(
        <Wrapper>
            
            <form onSubmit={handleSubmit}>
                <h1>Zarejestruj się</h1>
                <FormField label="E-mail" type="text" id="email" name="email" value={formValues.email} onChange={handleInputChange}/>
                <FormField label="Telefon" type="number" id="phone" name="phone" value={formValues.phone} onChange={handleInputChange}/>
                <FormField label="Hasło" type="password" id="password" name="password" value={formValues.password} onChange={handleInputChange}/>
                <FormField label="Powtórz Hasło" type="password" id="rpassword" name="rpassword" value={formValues.rpassword} onChange={handleInputChange}/>
                <Button>Zarejestruj się</Button>
            </form>
        </Wrapper>
    )
}

export default RegistrationSection;