import React from "react";
import "./Skills.css";

const Skills = () =>{
    return(
        <div className="SkillsWrapper">
            <div className="FrontEndSkills">
                <h6>Front End</h6>
                <hr />
                <div className="Skills">                    
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>LESS</p>
                    <p>Bootstrap</p>
                    <p>Styled Components</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux/React Redux</p>
                    <p>React Context API</p>
                    <p>React Testing Library</p>
                    <p>Jest</p>
                    <p>Cypress</p>
                    <p>Netlify</p>
                    <p>Vercel</p>
                </div>
                
            </div>
            <div className="BackEndSkills">
                <h6>Back End</h6>
                <hr />
                <div className="Skills">
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>SQL</p>
                    <p>Knex</p>
                    <p>SLite3</p>
                    <p>PostgreSQL</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>Heroku</p>
                </div>
            </div>
            <div className="SoftSkills">
                <h6>General/Soft Skills</h6>
                <hr />
                <div className="Skills">
                    <p>NPM</p>
                    <p>Git/Github</p>
                    <p>Wireframing</p>
                    <p>Logical Thinking</p>
                    <p>Research</p>
                    <p>Troubleshooting</p>
                    <p>Cooperation</p>
                    <p>Self-Awareness</p>
                    <p>Perseverance</p>
                </div>
            </div>

        </div>
    )   
}

export default Skills;