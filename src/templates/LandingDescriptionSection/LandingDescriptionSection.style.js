import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 2vmax 0 6vmax 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-2deg, #FFA801 15%, white 15.3%);

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