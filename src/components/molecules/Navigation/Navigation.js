import React from 'react'
import { RegisterButton } from '../../atoms/RegisterButton/RegisterButton'
import { LoginButton } from '../../atoms/LoginButton/LoginButton'
import { Wrapper } from './Navigation.styles'
import { MenuSeparator } from '../../atoms/MenuSeparator/MenuSeparator'
import { NavLink } from 'react-router-dom';
import { StyledLink } from '../../oragnisms/NavigationBar/NavigationBar.styles'

const Navigation = () => {
    return (
        <Wrapper>
            <RegisterButton><StyledLink to="/register">Rejestracja</StyledLink></RegisterButton>
            <MenuSeparator/>
            <LoginButton><StyledLink to="/login">Login</StyledLink></LoginButton>
        </Wrapper>
    )
}

export default Navigation;
