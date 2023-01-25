import React from 'react';
import '../styles/Project.css';

function Project({ item }) {
    return (
        <div className='project'>
            <h2>My Web Dev Portfolio!</h2>
            <img src={item.imgSrc} alt='project screenshot' className='project-img' />
            <div className='project-info'>
                <h1 className='project-title'>{ClipboardItem.title}</h1>
                <span className='technologies'>{item.technologies.join(" | ")}</span>
                <p>{item.description}</p>
                <span className='links'>
                    <a target="_blank" href={item.repo}>
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a target="_blank" href={item.deployed}>
                    <i class="fa-solid fa-rocket"></i>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Project;