import React from "react";
import maxfitPic from "../../../Images/maxfitPic.jpg";

const MaxFit = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={maxfitPic} alt="Max Fitness" />
            <div className="ProjectText">
                <p className="Technologies">HTML, CSS, JavaScript, React, NodeJS, PostgreSQL, BCryptJS || Netlify, Heroku</p>
                <p>Max Fitness is a gym located in Webster Massachusetts that one of my personal friends used to work for. After coming under new ownership, my friend reached out and asked if I was willing to create, design, and develop a website and logos for their company.</p>
                <p>I was tasked with creating this entire application in a span of three days. While not the most professional looking, it works entirely as requested, allowing users to view membership plans for the gym, view and sign up for group sessions, and view information about the gym. From an administrator account, you can view the users signed up for a group, perform CRUD operations on membership pricing plans and group sessions, change users' roles on the website, and change all of the text on the website.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://maxfitness.netlify.app/">Live Deployment</a>
                    <a className="ProjectLink" href="https://github.com/Max-Fitness">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default MaxFit;