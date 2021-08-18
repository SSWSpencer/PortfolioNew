import React, {useState} from "react";
import "./Nav.css";
import {connect} from "react-redux";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";

const Nav = (props) =>{
    const [mobileShown, setMobileShown] = useState(false);
    const showAbout = () =>{
        setMobileShown(false);
        props.setAbout(true);
    }
    const showSkills = () =>{
        setMobileShown(false);
        props.setSkills(true);
    }
    const showProjects = () =>{
        setMobileShown(false);
        props.setProjects(true);
    }

    return(
        <div className="NavWrapper">
            <div className="NavBar">
                <div className="NavLeft">
                    <button id="ABOUT" onClick={()=>{showAbout()}}>ABOUT</button>
                    <button id="SKILLS" onClick={()=>{showSkills()}}>SKILLS</button>
                    <button id="PROJECTS" onClick={()=>{showProjects()}}>PROJECTS</button>
                    <button id="RESUME"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UAItsECOpIbMmIGzkl2PH-nEbLNZShtt/view?usp=sharing">RESUME</a></button>
                </div>
                <div className="NavRight">
                    <a id="GITHUB" href="https://github.com/SSWSpencer"><FaGithub/></a>
                    <a id="LINKEDIN" href="https://www.linkedin.com/in/steven-sw-spencer/"><FaLinkedin/></a>
                    <a id="EMAIL" href="mailto: steve35spencer@gmail.com"><FaEnvelope/></a>
                </div>
            </div>
            <div className="MobileNavBar" onClick={()=>{setMobileShown(!mobileShown)}}>
                <FaBars/>
            </div>
            <div className={mobileShown ? "MobileNavLinks" : "hidden"}>
                <p id="MobileAbout" onClick={()=>{showAbout()}}>ABOUT</p>
                <p onClick={()=>{showSkills()}} >SKILLS</p>
                <p onClick={()=>{showProjects()}} >PROJECTS</p>
                <a id="MobileResume" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UAItsECOpIbMmIGzkl2PH-nEbLNZShtt/view?usp=sharing">RESUME</a>
                <div className="MobileContact">
                    <a href="https://github.com/SSWSpencer"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/steven-sw-spencer/"><FaLinkedin/></a>
                    <a href="mailto: steve35spencer@gmail.com"><FaEnvelope/></a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        data: state
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
        setAbout: (state) => { dispatch({type: "SET_ABOUT", data: state})},
        setSkills: (state) => { dispatch({type: "SET_SKILLS", data: state})},
        setProjects: (state) => {dispatch({type: "SET_PROJECTS", data: state})}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);