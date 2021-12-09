import styled from "styled-components";

export const RegisterButton = styled.div`
    width: 100%;
    padding:0.5vmax 1vmax;
    background-color: ${({theme}) => theme.colors.main};
    text-align: center;
    border-radius: 20px;
    font-size: ${({theme}) => theme.fontSize.xxs};
    
    font-weight: 500;
    text-transform: uppercase;
`;