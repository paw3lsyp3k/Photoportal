import React from 'react';
import { Wrapper } from './NavigationBar.styles';
import Navigation from '../../molecules/Navigation/Navigation';
import { StyledLink, Logo } from './NavigationBar.styles';


const NavigationBar = () => {
    return(
        <Wrapper>
            <Logo><StyledLink to="/">TwójFotograf</StyledLink></Logo>
            <Navigation />
        </Wrapper>
    )
};

export default NavigationBar;