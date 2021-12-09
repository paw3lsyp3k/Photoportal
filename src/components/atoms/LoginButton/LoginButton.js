import styled from "styled-components";

export const LoginButton = styled.div`
    width: 100%;
    padding:0.5vmax 1vmax;
    text-align: center;
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.xxs};
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
`;