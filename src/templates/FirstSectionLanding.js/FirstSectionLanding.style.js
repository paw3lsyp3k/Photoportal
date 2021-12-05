import styled from "styled-components";
import background from "../../assets/img/background.jpg"

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
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
`;