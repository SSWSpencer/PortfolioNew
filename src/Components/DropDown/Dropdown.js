import React, {useState} from "react";
import "./Dropdown.css"

import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

const Dropdown = (props) =>{
    const renderType = () =>{
        if(props.type === "WEB"){
            return(
                <div className="WebBanner">
                    <p>WEB</p>
                </div>
            )
        }
        else if(props.type === "PYTHON"){
            return(
                <div className="PythonBanner">
                    <p>PYTHON</p>
                </div>
            )
        }
        else if(props.type === "JAVA"){
            return(
                <div className="JavaBanner">
                    <p>JAVA</p>
                </div>
            )
        }
    }

    const [shown, setShown] = useState(false);
    return(
        <div className={props.odd ? "DropdownWrapper odd" : "DropdownWrapper even"}>
            <div className={props.odd ? "DropdownTitle odd" : "DropdownTitle even"} onClick={()=>{setShown(!shown)}}>
                <div className="TitleHeader">
                    {renderType()}
                    <h6>{props.title}</h6>
                </div>
                <button>{shown ? <IoIosArrowDropup/> : <IoIosArrowDropdown />}</button>
            </div>
            <div className={(shown) ? "dropdownshown" : "dropdownhidden"}>
                {props.children}
            </div>
        </div>
    )
}

export default Dropdown;