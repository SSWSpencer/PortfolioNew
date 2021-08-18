import React from "react";
import "./Projects.css";
import Dropdown from "../DropDown/Dropdown.js";

import Moponoly from "./Components/Moponoly.js";
import Conway from "./Components/Conway.js";
import Nasa from "./Components/Nasa.js";
import MaxFit from "./Components/MaxFit.js";
import SaverLife from "./Components/SaverLife.js";
import VSTKey from "./Components/VSTKey.js";
import LifeLimit from "./Components/LifeLimit.js";

const Projects = () =>{
    return(
        <div className="ProjectsWrapper">
            <Dropdown title="Moponoly Probability" odd="true" type="WEB">
                <Moponoly />
            </Dropdown>
            <Dropdown title="Conway's Game of Life" type="WEB">
                <Conway />
            </Dropdown>
            <Dropdown title="NASA Astronomy Photo of the Day" odd="true" type="WEB">
                <Nasa />
            </Dropdown>
            <Dropdown title="Max Fitness" type="WEB">
                <MaxFit />
            </Dropdown>
            <Dropdown title="SaverLife" odd="true" type="WEB">
                <SaverLife />
            </Dropdown>
            <Dropdown title="VST-Key Auto Presets" type="PYTHON">
                <VSTKey />
            </Dropdown>
            <Dropdown title="LifeLimit (Minecraft Java Edition Plugin)" odd="true" type="JAVA">
                <LifeLimit />
            </Dropdown>
        </div>
    )
}

export default Projects;