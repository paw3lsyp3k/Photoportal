import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2vmax 1vmax;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.darkwhite};
`;

export const RecomendedProfileCity = styled.div`
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.colors.grey};
`;

export const RecomendedProfilePicture = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-color: darkorange;
`;

export const RecomendedProfileRating = styled.div`
    padding: 1vmax 0;
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.colors.grey};
`;

export const RecomendedProfileTitle = styled.div`
    padding: 1vmax 0;
    text-align: center;
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.m};
`;

export const Link = styled.div`
    width: 100%;
    padding: 1vmax 0 0 0;
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.xs};
    font-weight: 500;
    display: flex;
    justify-content: center;
    p{
        cursor: pointer;
    }
`;
