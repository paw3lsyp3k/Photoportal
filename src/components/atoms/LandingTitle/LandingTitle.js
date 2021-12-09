import styled from "styled-components";

export const LandingTitle = styled.div`
    width: 50%;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 4.5vmax;
        font-weight: 500;
        a{
            color: ${({theme}) => theme.colors.main};
        }
    }
    p{
        font-size: ${({theme}) => theme.fontSize.s};
        margin-top: 3%;
        margin-bottom: -2vmax;
        width: 70%;
    }
`;