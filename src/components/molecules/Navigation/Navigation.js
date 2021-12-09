import React from 'react'
import { RegisterButton } from '../../atoms/RegisterButton/RegisterButton'
import { LoginButton } from '../../atoms/LoginButton/LoginButton'
import { Wrapper } from './Navigation.styles'
import { MenuSeparator } from '../../atoms/MenuSeparator/MenuSeparator'

const Navigation = () => {
    return (
        <Wrapper>
            <RegisterButton>Rejestracja</RegisterButton>
            <MenuSeparator/>
            <LoginButton>Login</LoginButton>
        </Wrapper>
    )
}

export default Navigation;
