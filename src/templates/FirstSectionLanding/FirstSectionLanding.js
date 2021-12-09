import React from 'react';
import { Wrapper, WrapperDecoration } from './FirstSectionLanding.style';
import NavigationBar from '../../components/oragnisms/NavigationBar/NavigationBar';
import { LandingTitle } from '../../components/atoms/LandingTitle/LandingTitle';
import LandingSearchSection from '../../components/molecules/LandingSearchSection/LandingSearchSection';

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