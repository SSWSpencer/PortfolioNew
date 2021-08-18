import React from "react";
import moponolyPic from "../../../Images/moponolyPic.jpg";

const Moponoly = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={moponolyPic} alt="Moponoly Probability" />
            <div className="ProjectText">
                <p className="Technologies">HTML, CSS, JavaScript, React, NodeJs, PostreSQL || Netlify, Heroku</p>
                <p>Moponoly Probability is a simulation of a popular board game that serves to answer the question of what the most landed-on tile in the game is. According to many sources online, who use math and statistics to make their claim, the tile 14 positions after jail is most common tile to land on. This application simulates 100,000 games and reports the data of which tile is landed on how many times, to see whether the sources' claims are true or false.</p>
                <p>I built this entire application from the ground-up in JavaScript's React Library. It simulates the games on the front end, and stores the data from all executed games in the back end, and displays a global tally of how many times each tile has been landed on worldwide. It utilizes PlotlyJS to display the results in graph-form.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://moponoly-probability.netlify.app/">Live Deployment</a>
                    <a className="ProjectLink" href="https://github.com/SSWSpencer/Moponoly-Probability">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Moponoly;