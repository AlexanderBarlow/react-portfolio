import React from 'react';
import pdfResume from "../../images/Resume.pdf";

 export default function Resume() {
    return (
        <div className='column'>
            <h1>
                Click to download my 
                <a className="highlight" href={pdfResume} target="_blank">
          {" "}
          Resume
        </a>
            </h1>

        <div className='container'>
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap/frameworks</li>
                <li>jQuery</li>
                <li>React</li>
                <li>HandleBars</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Git Version Control</li>
                <li>MERN STACK</li>
                <li>RESTful</li>
            </ul>
        </div>
        </div>
    )
 }