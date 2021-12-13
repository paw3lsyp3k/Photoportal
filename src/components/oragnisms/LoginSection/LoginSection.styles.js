import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #2C2C2C;
`

export const Wrapper = styled.div`
    padding: 3vmax 2vmax;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 20px;
    

    h1{
        font-weight: 500;
        font-size: ${({theme}) => theme.fontSize.m};
        text-align: center;
        margin-bottom: 3vmax;
    }
`;