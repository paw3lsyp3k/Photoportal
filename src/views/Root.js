import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Landingpage from './Landingpage';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={
                        <Landingpage />
                    }/>
                    <Route path="/login" element={
                        <UserLogin />
                    }/>
                    <Route path="/register" element={
                        <UserRegistration />
                    }/>
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default Root;