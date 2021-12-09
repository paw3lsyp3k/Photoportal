import React from 'react';
import FirstSectionLanding from '../templates/FirstSectionLanding/FirstSectionLanding';
import LandingDescriptionSection from '../templates/LandingDescriptionSection/LandingDescriptionSection';
import RecomendedSection from '../templates/RecomendedSection/RecomendedSection';
import FaqSection from '../templates/FaqSection/FaqSection';

const Landingpage = () => {
    return(
        <>
            <FirstSectionLanding />
            <LandingDescriptionSection />
            <RecomendedSection />
            <FaqSection />
        </>
    )
}

export default Landingpage;