import React from "react";
import saverlifePic from "../../../Images/saverlifePic.jpg";

const SaverLife = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={saverlifePic} alt="SaverLife" />
            <div className="ProjectText">
                <p className="Technologies">HTML, CSS, JavaScript, React, NodeJS, PostgreSQL || AWS</p>
                <p>SaverLife is a nonprofit organization created to inspire, inform, and reward the millions of Americans who need help saving money, through taking a user's past financial data and creating a predicted budget for them to utilize their income.</p>
                <p>I worked remotely with a group of five other web development students to create this website for the SaverLife team. I was responsible for the mobile view of the website, creating a mobile-friendly carousel for users to see their financial data, as well as other features to facilitate the mobile experience.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://b.saverlife.dev/">Live Deployment</a>
                    <a className="ProjectLink" href="https://github.com/Lambda-School-Labs/Labs25-SaverLife-TeamB-fe">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default SaverLife;