import React from "react";
import vstkeyPic from "../../../Images/vstkeyPic.jpg";

const VSTKey = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={vstkeyPic} alt="VST-Key Auto Presets" />
            <div className="ProjectText">
                <p className="Technologies">Python || Keyboard, PyAutoGUI</p>
                <p>Bias FX 2 is one of the most well-known guitar amp simulators/VSTs. Although coming in at a premium price of up to $300 (and sometimes more), it doesn't come with the ability to easily switch between tones without spending extra money on a MIDI controller. While running this script at the same time as Bias FX 2, it allows the user to switch between presets using only their keyboard</p>
                <p>Many people have asked for this exact functionality in the applciation, to which the developers said it wouldn't happen. I wrote this script using both the PyAutoGui and Keyboard modules in Python. The script waits for a keyboard input (1-8), and then searches the screen for the corresponding preset button, and clicks it. This allows for quick transitions between tones while mid-play.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://www.mediafire.com/file/7cdz5jzqvs2e3ti/VST-Keys.zip/file">Download (MediaFire)</a>
                    <a className="ProjectLink" href="https://github.com/SSWSpencer/VST-Key-Auto-Presets">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default VSTKey;