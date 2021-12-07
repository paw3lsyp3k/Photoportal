import React from 'react';
import { Wrapper } from './FaqSection.styles';
import Acordion from '../../components/oragnisms/Acordion';

const FaqSection = () => {
    return(
        <Wrapper>
            <h1>FAQ</h1>
            <Acordion />
        </Wrapper>
    )
}

export default FaqSection;
