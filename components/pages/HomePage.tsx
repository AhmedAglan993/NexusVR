import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import Projects from '../Projects';
import Testimonials from '../Testimonials';
import FAQ from '../FAQ';
import Blog from '../Blog';
import Contact from '../Contact';
import { useLanguage } from '../../contexts/LanguageContext';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <FAQ />
            <Blog />
            <Contact />
        </>
    );
};

export default HomePage;
