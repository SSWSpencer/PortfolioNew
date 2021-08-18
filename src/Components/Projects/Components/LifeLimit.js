import React from "react";
import lifelimitPic from "../../../Images/lifelimitPic.jpg";

const LifeLimit = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={lifelimitPic} alt="Life Limit (Minecraft Server Plugin)" />
            <div className="ProjectText">
                <p className="Technologies">Java || Spigot API</p>
                <p>This is a basic plugin for Minecraft Java Edition Servers that run the Spigot API. This plugin sets a life cap for players, to encourage a more strategic approach to gameplay and interaction with other players around the server.</p>
                <p>I developed this plugin using the Spigot API for Minecraft. This was the first project I've made in Java since I started learning Web Development, and I made it to re-familiarize myself with the language as a whole.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://www.mediafire.com/file/s6apzd6n3pn610a/LifeLimit.jar/file">Download (MediaFire)</a>
                    <a className="ProjectLink" href="https://github.com/SSWSpencer/LifeLimitMC">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default LifeLimit;