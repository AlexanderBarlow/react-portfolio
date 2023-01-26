import React from 'react';
import "../styles/Footer.css";

const styles = {
    footer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#554D85',
        height: '20vh'
    },
    padding: {
        padding: '20px 20px 0 0',
        fontSize: '40px'
    },
    img: {
        width: '100px'
    }
}

export default function Footer() {
    return (
        <div style={styles.footer}>
            <a href='https://github.com/alexanderbarlow' target='blank'><i style={styles.padding} class='fa-github-square'></i></a>
            <a href='https://www.linkedin.com/in/alexanderlbarlow/' target='blank'><i style={styles.padding} class='fa-brands fa-linkedin-in'></i></a>
            <a href='mailto:alexanderbarlow7@gmail.com'><i style={styles.padding} class='fa fa-envolope' aria-hidden='true'></i></a>
        </div>
    );
}
