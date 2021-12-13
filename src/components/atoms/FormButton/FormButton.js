import styled from "styled-components";

export const Button = styled.button`
    background: green;
    margin: 1vmax 0 0 0;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.main};
    cursor: pointer;
`;