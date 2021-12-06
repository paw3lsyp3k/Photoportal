import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 4vmax 0 8vmax 0;
    background: linear-gradient(-2deg, white 15%, #FFA801 15.2%);

    h1{
        color: ${({theme}) => theme.colors.white};
        font-size: ${({theme}) => theme.fontSize.xl};
    }
`;