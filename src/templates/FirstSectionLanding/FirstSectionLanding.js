import React from 'react';
import { Wrapper, WrapperDecoration } from './FirstSectionLanding.style';
import NavigationBar from '../../components/oragnisms/NavigationBar/NavigationBar';
import LandingSearchSection from '../../components/molecules/LandingSearchSection/LandingSearchSection';
import { LandingTitle } from './FirstSectionLanding.style';

const FirstSectionLanding = () => {
    return(
        <Wrapper>
            <WrapperDecoration>
                <NavigationBar />
                <LandingTitle>
                <h1>Szukasz <a>fotografa?</a></h1>
                <p>Przeglądaj setki ogłoszeń, wybierz te, które
                    najbardziej odpowiadają Twoim oczekiwaniom
                    i ciesz się wspaniałymi zdjęciami!</p>
                </LandingTitle>
                <LandingSearchSection />
            </WrapperDecoration>
        </Wrapper>
    )

}

export default FirstSectionLanding;