import React from "react";
import nasaPic from "../../../Images/nasaPic.jpg";

const Nasa = () =>{
    return(
        <div className="ProjectWrapper">
            <img src={nasaPic} alt="NASA APOD" />
            <div className="ProjectText">
                <p className="Technologies">HTML, CSS, JavaScript, React || Vercel</p>
                <p>NASA's Astronomy Photo of the Day is an API released by NASA to display a new picture of our universe every day. The API allows developers to add parameters to the endpoint, which enables the ability to get pictures from other dates, or a range of dates. This project fetches the previous two weeks leading up to the present, and displays them in an image carousel.</p>
                <p>This is a reworking of one of the first projects I completed as a beginner to web development. The previous rendition is available to be seen as a live deployment <a href="https://stevenspencer-nasa-apod.vercel.app/" target="_blank" rel="noreferrer">here</a> or as a github repository <a rel="noreferrer" href="https://github.com/SSWSpencer/nasa-photo-of-the-day">here</a>. The updated version comes with support for NASA's addition of videos and iframe elements, on top of the ability to view any picture from the past, or searching for a specific picture by keywords.</p>
                <div className="ProjectLinks">
                    <a className="ProjectLink" href="https://nasa-apod-v2.vercel.app/">Live Deployment</a>
                    <a className="ProjectLink" href="https://github.com/SSWSpencer/NASA-APOD-v2">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Nasa;