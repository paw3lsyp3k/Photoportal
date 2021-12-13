import React from 'react';
import { Container } from '../components/oragnisms/LoginSection/LoginSection.styles';
import NavigationBar from '../components/oragnisms/NavigationBar/NavigationBar';
import RegistrationSection from '../components/oragnisms/RegistrationSection/RegistrationSection';


const UserRegistration = () => {
    return(
        <Container>
            <NavigationBar />
            <RegistrationSection/>
        </Container>
    )
}

export default UserRegistration;