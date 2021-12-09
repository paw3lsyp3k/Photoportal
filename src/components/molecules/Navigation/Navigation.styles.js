import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin: 1vmax 5% 0 5%;
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
`;