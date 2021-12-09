import styled from "styled-components";

export const Logo = styled.div`
    margin-left: 5%;
    font-size: ${({theme}) => theme.fontSize.l};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`;