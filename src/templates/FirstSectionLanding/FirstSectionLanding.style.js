import styled from "styled-components";
import background from "../../assets/img/background.jpg"

export const Wrapper = styled.div`
    width: 100%;
    height: 92vh;
    background-image: url(${background});
    background-position: bottom;
    background-size: cover;
    
    h2{
        color: ${({theme}) => theme.colors.main};
    }
`;

export const WrapperDecoration = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(-2deg, white 12%, rgba(0, 0, 0, 0) 12.3%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

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
        font-weight: 400;
        line-height: 150%;
    }
`;