import React from 'react';
import Common from './Common';
import web from '../src/images/contactimg.jpg';


const About = () => {
    return (
        <Common Name="Welcome To About Page" Btn="Contact Us" Path="/contact" imgg={web}/>
        )
}
export default About;