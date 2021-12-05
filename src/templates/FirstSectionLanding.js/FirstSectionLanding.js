import React from 'react';
import { Wrapper, WrapperDecoration } from './FirstSectionLanding.style';
import NavigationBar from '../../components/oragnisms/NavigationBar/NavigationBar';

const FirstSectionLanding = () => {
    return(
        <Wrapper>
            <WrapperDecoration>
                <NavigationBar>
                    <h1>hej</h1>
                </NavigationBar>
                <h2>Oh yea</h2>
            </WrapperDecoration>
        </Wrapper>
    )

}

export default FirstSectionLanding;