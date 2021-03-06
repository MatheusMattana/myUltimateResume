import React from 'react';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import WhatIDo from './components/WhatIDo';
import AboutMe from './components/AboutMe';
import MyPortifolio from './components/MyPortifolio';
import Footer from './components/Footer';

import LanguageProvider from './context/Language';

import './AppContainer.css';
import './CSS/mainStyles.css';

function AppContainer() {
  return (
    <LanguageProvider>
      <div className="AppContainer">
        <NavBar />
        <MainSection />
        <WhatIDo />
        <MyPortifolio />
         <AboutMe />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default AppContainer;
