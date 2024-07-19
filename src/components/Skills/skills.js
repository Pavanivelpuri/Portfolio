
/*import React from "react";
import './skills.css';
import AzureCloud from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import GitHub from '../../assets/app-design.png';
import Skill1 from '../../assets/java.png';
import Skill2 from '../../assets/python.png';
import Skill3 from '../../assets/html.png';
import Skill4 from '../../assets/css.png';
import Skill5 from '../../assets/js.png';
import Skill6 from '../../assets/react.png';
import Skill7 from '../../assets/mongodb.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Can Do Is?</span>
            <span className="skillDesc">I'm a passionate and adaptable software developer with skills in Azure, Java, cloud, programming, and frontend development. I love learning new things and always aim to deliver top-notch results. I'm eager to contribute and achieve great success in my work.</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={AzureCloud} alt="AzureCloud" className="skillBarImg" />
                    <div className="skillBarContent">
                        <h2>Azure Cloud</h2>
                        <p>Experienced in Azure cloud technologies, specializing in designing and deploying scalable, secure, and efficient cloud-based applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarContent">
                        <h2>Web Design</h2>
                        <p>Experienced in web design, specializing in creating user-friendly, visually appealing, and responsive websites.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={GitHub} alt="GitHub" className="skillBarImg" />
                    <div className="skillBarContent">
                        <h2>GitHub</h2>
                        <p>Experienced in GitHub, specializing in version control, collaboration, and continuous integration workflows.</p>
                    </div>
                </div>
            </div>

            <div id="Experience">
                <h1 className="experiencepagetitle">Skills</h1>
                <div className="experienceImgs">
                    <div className="experienceImg">
                        <img src={Skill1} alt="java" />
                        <span className="btn-text">Java</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill2} alt="python" />
                        <span className="btn-text">Python</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill3} alt="html" />
                        <span className="btn-text">HTML</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill4} alt="css" />
                        <span className="btn-text">CSS</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill5} alt="javascript" />
                        <span className="btn-text">JavaScript</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill6} alt="react" />
                        <span className="btn-text">React</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill7} alt="mongodb" />
                        <span className="btn-text">MongoDB</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;*/

import React from "react";
import './skills.css';
import AzureCloud from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import GitHub from '../../assets/app-design.png';
import Skill1 from '../../assets/java.png';
import Skill2 from '../../assets/python.png';
import Skill3 from '../../assets/html.png';
import Skill4 from '../../assets/css.png';
import Skill5 from '../../assets/js.png';
import Skill6 from '../../assets/react.png';
import Skill7 from '../../assets/mongodb.png';

const Skills = () => {
    return (
        <>
            <section id="skills">
                <span className='skillTitle'>What do I do?</span>
                <span className='skillPara'>
                I'm a passionate and adaptable software developer with skills in Azure, Java, cloud, programming, and frontend development. I love learning new things and always aim to deliver top-notch results. I'm eager to contribute and achieve great success in my work.
                </span>
                <div className='skillbars'>
                    <div className='skillbar'>
                        <img src={AzureCloud} alt='Azure Cloud' className='skillbarImg'/>
                        <div className='skillbartext'>
                            <h1>Azure Cloud</h1>
                            <p>Experienced in Azure cloud technologies, specializing in designing and deploying scalable, secure, and efficient cloud-based applications.</p>
                        </div>
                    </div>
                    
                    <div className='skillbar'>
                        <img src={WebDesign} alt='Web Design' className='skillbarImg'/>
                        <div className='skillbartext'>
                            <h1>Web Design</h1>
                            <p>Proficient in web design, adept at creating visually appealing and user-friendly interfaces.</p>
                        </div>
                    </div>
                    
                    <div className='skillbar'>
                        <img src={GitHub} alt='GitHub' className='skillbarImg'/>
                        <div className='skillbartext'>
                            <h1>Git</h1>
                            <p>Skilled in Git version control, proficient in managing code repositories, branching, merging, and resolving conflicts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Experience">
                <h1 className="experiencepagetitle">Skills</h1>
                <div className="experienceImgs">
                    <div className="experienceImg">
                        <img src={Skill1} alt="Java" />
                        <span className="btn-text">Java</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill2} alt="Python" />
                        <span className="btn-text">Python</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill3} alt="HTML" />
                        <span className="btn-text">HTML</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill4} alt="CSS" />
                        <span className="btn-text">CSS</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill5} alt="JavaScript" />
                        <span className="btn-text">JavaScript</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill6} alt="React" />
                        <span className="btn-text">React</span>
                    </div>
                    <div className="experienceImg">
                        <img src={Skill7} alt="MongoDB" />
                        <span className="btn-text">MongoDB</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;

