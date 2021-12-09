import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Landingpage from './Landingpage';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <Landingpage />
        </ThemeProvider>
    );
};

export default Root;