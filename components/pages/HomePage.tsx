import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import Projects from '../Projects';
import Testimonials from '../Testimonials';
import FAQ from '../FAQ';
import Contact from '../Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <FAQ />
            <Contact />
        </>
    );
};

export default HomePage;
