import React from 'react';
import LoginSection from '../components/oragnisms/LoginSection/LoginSection';
import { Container } from '../components/oragnisms/LoginSection/LoginSection.styles';
import NavigationBar from '../components/oragnisms/NavigationBar/NavigationBar';


const UserLogin = () => {
    return(
        <Container>
            <NavigationBar />
            <LoginSection/>
        </Container>
    )
}

export default UserLogin;