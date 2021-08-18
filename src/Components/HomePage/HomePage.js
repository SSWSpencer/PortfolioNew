import React from "react";
import me from "../../Images/me.png";

import "./HomePage.css";
import data from "./data.json";

const HomePage = () =>{
    return(
        <div className="HomeWrapper">
            <div className="HomeBox">
                <img src={me} alt="Steven SW Spencer" />
                <div className="HomeText">
                    <h1>{data.title}</h1>
                    <h5>{data.subtitle}</h5>
                </div>
            </div>
        </div>
    )
}

export default HomePage;