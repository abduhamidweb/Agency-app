import React, { useEffect } from 'react';
import Projects from './../../components/projects/Projects';
import Opportinut from '../../components/Opportinut/Opportinut';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import OurServises from '../../components/OurServisesCard/OurServises.jsx';
import Blog from '../../components/Blog/Blog.jsx';
import OurTeam from '../../components/OurTeam/OurTeam';
import Hero from '../../components/UI/Hero';

const Main = () => {
// useEffect(()=>{
// },[])
    return (
        <div>
        
            <Hero/>
            <AboutCompany/>
            <Opportinut/>
            <Projects />
            

            <OurServises />
            <Blog />
            <OurTeam/>

        

        </div>
    );
};

export default Main;