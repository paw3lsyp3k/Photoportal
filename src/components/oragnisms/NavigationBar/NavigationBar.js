import React from 'react';
import { Wrapper } from './NavigationBar.styles';
import {Logo} from '../../atoms/Logo/Logo';
import Navigation from '../../molecules/Navigation/Navigation';


const NavigationBar = () => {
    return(
        <Wrapper>
            <Logo>TwójFotograf</Logo>
            <Navigation />
        </Wrapper>
    )
};

export default NavigationBar;