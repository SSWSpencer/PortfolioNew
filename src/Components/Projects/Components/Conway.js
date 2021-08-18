import React from "react";
import conwayPic from "../../../Images/conwayPic.jpg";

const Conway = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={conwayPic} alt="Conway's Game of Life" />
            <div className="ProjectText">
                <p className="Technologies">HTML, CSS, JavaScript, React || Vercel</p>
                <p>I built this entire application from the ground-up in JavaScript's React Library. It simulates the games on the front end, and stores the data from all executed games in the back end, and displays a global tally of how many times each tile has been landed on worldwide. It utilizes PlotlyJS to display the results in graph-form.</p>
                <p>I built the entire front end of this project in a four day sprint as a project for my school. It utilizes no back end, and simply uses algorithms to determine the next state of the cells, and renders the board accordingly.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://gameoflife-one.vercel.app/">Live Deployment</a>
                    <a className="ProjectLink" href="https://github.com/SSWSpencer/gameoflife">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Conway;