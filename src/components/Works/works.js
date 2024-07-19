import React from "react";
import './works.css';
import Project1 from '../../assets/portfolio-2.png';
import Project2 from '../../assets/file (2).png';
import Project3 from '../../assets/file (4).png';
import Project4 from '../../assets/autoscalling.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">Explore a collection of my diverse projects, showcasing innovative solutions and technical expertise across various domains. Each project highlights my commitment to quality and passion for continuous learning.</span>
            <div className="worksImgs">
                <div className="worksImg">
                    <div className="project">
                        <div className="project-front">
                        <img src={Project1} alt="" className="worksImg" />
                        </div>
                        <div className="project-back">
                            <h1>Portfolio</h1>
                            <p>"I developed my portfolio using React.js to showcase my projects and skills."</p>
                        </div>
                    </div>
                </div>
                <div className="worksImg">
                    <div className="project">
                        <div className="project-front">
                        <img src={Project2} alt="" className="worksImg" />
                        </div>
                        <div className="project-back">
                            <h1>Azure Digital Avatar</h1>
                            <p>"I've created an interactive project using Azure and React.js/HTML that allows for both asking and reading answers."</p>
                        </div>
                    </div>
                </div>
                <div className="worksImg">
                    <div className="project">
                        <div className="project-front">
                        <img src={Project3} alt="" className="worksImg" />
                        </div>
                        <div className="project-back">
                            <h1>Data Cleaning and Preparation <br /></h1>
                            <p>"In these projects, I focused on data cleaning and preparation using Python, NumPy, and Pandas."</p>
                        </div>
                    </div>
                </div>
                <div className="worksImg">
                    <div className="project">
                        <div className="project-front">
                        <img src={Project4} alt="" className="worksImg" />
                        </div>
                        <div className="project-back">
                            <h1>Auto Scalling <br /></h1>
                            <p>

"I implemented autoscaling using Azure to dynamically adjust resources based on application demand, ensuring optimal performance and cost efficiency.""</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    )
}

export default Works;
