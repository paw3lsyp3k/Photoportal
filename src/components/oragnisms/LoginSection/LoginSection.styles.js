import styled from "styled-components";
import background from '../../../assets/img/loginbackground.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
`

export const Wrapper = styled.div`
    padding: 1vmax;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 10px;

    h1{
        font-weight: 500;
        font-size: ${({theme}) => theme.fontSize.m};
    }
`;