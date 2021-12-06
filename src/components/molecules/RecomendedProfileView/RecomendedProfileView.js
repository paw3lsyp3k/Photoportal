import React from 'react';
import { RecomendedProfilePicture } from '../../atoms/RecomendedProfilePicture/RecomendedProfilePicture';
import { Wrapper } from './RecomendedProfileView.styles';
import { RecomendedProfileTitle } from '../../atoms/RecomendedProfileTitle/RecomendedProfileTitle';
import { RecomendedProfileCity } from '../../atoms/RecomendedProfileCity/RecomendedProfileCity';
import { RecomendedProfileRating } from '../../atoms/RecomendedProfileRating/RecomendedProfileRating';
import RecomendedProfileLink from '../../atoms/RecomendedProfileLink/RecomendedProfileLink';
 
const RecomendedProfileView = () => {
    return(
        <Wrapper>
            <RecomendedProfilePicture />
            <RecomendedProfileTitle>Adam Słodowski</RecomendedProfileTitle>
            <RecomendedProfileCity>Warszawa</RecomendedProfileCity>
            <RecomendedProfileRating>Rating: 5</RecomendedProfileRating>
            <RecomendedProfileLink />
        </Wrapper>
    );
}

export default RecomendedProfileView;