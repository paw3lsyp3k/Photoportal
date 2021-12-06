import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 3vmax 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};

    p{
        font-size: ${({theme}) => theme.fontSize.l};
        line-height: 150%;
        font-weight: 500;
        a{
            color: ${({theme}) => theme.colors.main};
            font-weight: 700;
        }
    }
`;