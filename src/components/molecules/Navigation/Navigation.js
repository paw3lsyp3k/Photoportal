import React from 'react';
import { Wrapper } from './Navigation.styles';
import { MenuSeparator } from './Navigation.styles';
import { StyledLink } from './Navigation.styles';
const Navigation = () => {
    return (
        <Wrapper>
            <StyledLink activeClassName="active-link" to="/register">Rejestracja</StyledLink>
            <MenuSeparator />
           <StyledLink activeClassName="active-link" to="/login">Login</StyledLink>
        </Wrapper>
    )
}

export default Navigation;
