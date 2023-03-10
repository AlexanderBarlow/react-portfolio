import React from 'react';
import portrait from '../../images/profile.jpg';
import '../../styles/About.css';

const styles = {
    img: {
        width: '250px',
        backgroundPosition: 'center',
        height: '300px',
        borderRadius: '10%',
        padding: '1%',
        border: '5px 5px 5px #FFF'
    },
    display: {
        display: 'flex',
        justifyContent: 'center'
    },
    list: {
        listStyle: 'none'
    },
    main: {
        padding: '2%',
        lineHeight: '50px'
    },
    upenn: {
        color: '#3E6DBF',
        text: 'bold',
    }
}

export default function About () {
    return (
        <div>
            <div className='container inline' >
            <div style={styles.display}>
             <img class='img-fluid' style={styles.img} src={portrait} alt='self portrait'></img>
            </div>
            <div style={styles.main}>
            <div class='container' >
                <h2>Education</h2>
                <p>I have an Associates of Arts in Computer Information Ssystems and Technology. Currently, I am persuing a certificate in Full-Stack Web Development at <span style={styles.upenn}>UPENN</span>.</p>
            </div>
            <div >
                <h2>Academic Achievements</h2>
                <ul style={styles.list}>
                    <li>3x Dean's List</li>
                    <li>1x President's List</li>
                    <li>Graduated with Honors Cum Laude</li>
                    <li>GPA: 3.749</li>
                    <li>Honors Society Phi Theta Kappa</li>
                    <li>The National Society of Leader and Success/NSLS </li>
                </ul>
            </div>
            <div>
                <h2>Personal Bio</h2>
                <p>I am persuing a role as a Full-Stack Web Developer. Fresh out of high school I persued Electrical Engineering. That is until I was exposed to Software Development. This was through my Fiance's father, whom himself is a Software Developer. I was immediately intrueged by the immplication of problem solving. I knew I was meant to solve complexing problems, but how I was not sure. Coding always fascinated me, and this exposure was the spark that lit my fire.</p>
            </div>
            </div>
            </div>
        </div>
    );
}