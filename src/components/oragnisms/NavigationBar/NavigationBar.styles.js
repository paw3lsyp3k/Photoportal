import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    padding: 1vmax 0;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
`;

export const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
`;