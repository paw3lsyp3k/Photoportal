import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin: 1vmax 5% 0 5%;
    display: flex;
    align-items: center;
    
`;

const activeClass =(navData) =>  navData.isActive ? "active" : '';

export const StyledLink = styled(NavLink).attrs({ className: activeClass })`
    text-decoration: none;
    width: 100%;
    padding:0.5vmax 1vmax;
    text-align: center;
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.xxs};
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;

    &.active {
    background-color: ${({theme}) => theme.colors.main};
    border-radius: 20px;
    }
  }
`;

export const MenuSeparator = styled.div`
    width: 2px;
    height: 25px;
    margin: 0 1vmax;
    background-color: ${({theme}) => theme.colors.white};
`;