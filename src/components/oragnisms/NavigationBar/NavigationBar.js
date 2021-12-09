import React from 'react';
import { Wrapper } from './NavigationBar.styles';
import {Logo} from '../../atoms/Logo/Logo';
import Navigation from '../../molecules/Navigation/Navigation';
import { StyledLink } from './NavigationBar.styles';


const NavigationBar = () => {
    return(
        <Wrapper>
            <Logo><StyledLink to="/">TwójFotograf</StyledLink></Logo>
            <Navigation />
        </Wrapper>
    )
};

export default NavigationBar;