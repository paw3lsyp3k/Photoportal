import styled from "styled-components";

export const AcordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 60%;
    margin-top: 3vmax;
`;

export const Container = styled.div`
    width: 100%;
    .active{
        background-color: ${({theme}) => theme.colors.main};
    }
`;

export const Wrap = styled.div`
    background-color: #C7C7C7;
    padding: 0.75vmax 1vmax;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin: 1.5vmax 0;
    h1{
        font-size: ${({theme}) => theme.fontSize.s};
        font-weight: 500;
    }

`;

export const Dropdown = styled.div`
    padding: 1vmax 2vmax 2vmax 2vmax;
    p{
        font-size: ${({theme}) => theme.fontSize.xs};
        text-align: center;
    }
`;