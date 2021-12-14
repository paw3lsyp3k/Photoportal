import React from 'react';
import { Wrapper } from './RecomendedProfileView.styles';

import { RecomendedProfileCity, RecomendedProfilePicture, RecomendedProfileRating, RecomendedProfileTitle, Link } from './RecomendedProfileView.styles';
 
const RecomendedProfileView = () => {
    return(
        <Wrapper>
            <RecomendedProfilePicture />
            <RecomendedProfileTitle>Adam Słodowski</RecomendedProfileTitle>
            <RecomendedProfileCity>Warszawa</RecomendedProfileCity>
            <RecomendedProfileRating>Rating: 5</RecomendedProfileRating>
            <Link><p>Zobacz</p></Link>
        </Wrapper>
    );
}

export default RecomendedProfileView;