import React from 'react';
import { Wrapper } from './RecomendedSection.styles';
import RecomendedProfiles from '../../components/oragnisms/RecomendedProfiles/RecomendedProfiles';

const RecomendedSection = () => {
    return(
        <Wrapper>
            <h1>Wyróżnione profile</h1>
            < RecomendedProfiles />
        </Wrapper>
    );
}

export default RecomendedSection;