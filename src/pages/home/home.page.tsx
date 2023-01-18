import React from 'react';
import HeroSection from './sections/hero.section';
import InfoSection from './sections/info.section';
import StoreSection from './sections/store.setion';

const HomePage = () => {
    return <main id="home">
        <HeroSection/>
        <InfoSection/>
        <StoreSection/>
    </main>
}

export default HomePage;