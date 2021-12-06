import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 1vmax 0 0 0;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.xs};
    font-weight: 500;
`;

const RecomendedProfileLink = () => {
    return(
        <Wrapper>
            <p>Zobacz profil  </p>
        </Wrapper>
    )
}

export default RecomendedProfileLink;