import React from 'react';
import RecomendedProfileView from '../../molecules/RecomendedProfileView/RecomendedProfileView';
import { Wrapper } from './RecomendedProfiles.styles';
import { ArrowButton } from '../../atoms/ArrowButton/ArrowButton';

const RecomendedProfiles = () => {
    return(
        <Wrapper >
            <ArrowButton />
            <RecomendedProfileView />
            <RecomendedProfileView />
            <RecomendedProfileView />
            <RecomendedProfileView />
            <ArrowButton />
        </Wrapper >
    )
}

export default RecomendedProfiles;