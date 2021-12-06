import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import FirstSectionLanding from '../templates/FirstSectionLanding.js/FirstSectionLanding';
import LandingDescriptionSection from '../templates/LandingDescriptionSection.js/LandingDescriptionSection';
import RecomendedSection from '../templates/RecomendedSection/RecomendedSection';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <FirstSectionLanding/>
            <LandingDescriptionSection />
            <RecomendedSection />
        </ThemeProvider>
    );
};

export default Root;