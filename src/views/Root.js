import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import FirstSectionLanding from '../templates/FirstSectionLanding.js/FirstSectionLanding';
import LandingDescriptionSection from '../templates/LandingDescriptionSection.js/LandingDescriptionSection';
import RecomendedSection from '../templates/RecomendedSection/RecomendedSection';
import FaqSection from '../templates/FaqSection/FaqSection';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <FirstSectionLanding/>
            <LandingDescriptionSection />
            <RecomendedSection />
            <FaqSection />
        </ThemeProvider>
    );
};

export default Root;