import React from "react";
import './intro.css';
import bg from '../Intro/imageprofile.png';
import btnImg from 
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName">Pavani</span> <br />Cloud Engineer</span>
                <p className="intropara">I am a dedicated cloud engineer with expertise in cloud infrastructure, DevOps, and automation, committed to delivering high-quality results.</p>
                <Link><button className="btn"><img src="" alt="" /> Resume </button></Link>
            </div> 
            <img src={bg} alt="Profile" className="bg" />       
        </section>
    )
}

export default Intro;