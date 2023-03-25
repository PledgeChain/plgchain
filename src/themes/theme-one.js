import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import SectionA from '../components/Cta/SectionA';
import SectionB from '../components/Cta/SectionB';
import SectionC from '../components/Cta/SectionC';
import SectionD from '../components/Cta/SectionD';
import Content from '../components/Content/Content';
import Team from '../components/Team/Team';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import ProjectSingle from '../components/Project/ProjectSingle';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <SectionA />             
                <SectionB />             
                <SectionC />             
                <SectionD />
                <ProjectSingle />             
                <Content />
                <Team />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
    }
}

export default ThemeOne;