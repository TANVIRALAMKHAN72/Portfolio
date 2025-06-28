import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import AboutMe from '../Component/AboutMe';
import SkillsPage from '../Component/SkillsPage';
import Education from '../Component/Education';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import ProjectShowcase from '../Component/ProjectShowcase';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <SkillsPage></SkillsPage>
            <Education></Education>
            <ProjectShowcase></ProjectShowcase>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;