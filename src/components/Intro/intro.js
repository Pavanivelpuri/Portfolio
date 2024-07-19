import React, { useState, useEffect } from "react";
import './intro.css';
import bg from '../../assets/pavani01.png';
import btnImg from '../../assets/hireme.png';

const roles = ["Cloud Engineer", "Software Developer", "Web Developer", "Front-End Developer"];

const Intro = () => {
    const [currentRole, setCurrentRole] = useState(roles[0]);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole((prevRole) => {
                const currentIndex = roles.indexOf(prevRole);
                const nextIndex = (currentIndex + 1) % roles.length;
                return roles[nextIndex];
            });
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(roleInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Pavani</span> <br />{currentRole}</span>
                <p className="intropara">I am a dedicated cloud engineer with expertise in cloud infrastructure, DevOps committed to delivering high-quality results.</p>
                <a href="/resume.pdf" download="Pavani_Resume.pdf">
                    <button className="btn">
                        <img src={btnImg} alt="Resume" className="btnImg" /> Resume
                    </button>
                </a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;

