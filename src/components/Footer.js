import React from 'react';
import "../styles/Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/alexanderbarlow' target='_blank'><i class='fa-brands fa-github'></i></a>
            <a href='https://www.linkedin.com/in/alexanderlbarlow/' target='_blank'><i class='fab fa-linkedin-in'></i></a>
            <a href='mailto:alexanderbarlow7@gmail.com'><i class='fa fa-envolope' aria-hidden='true'></i></a>
        </footer>
    )
}

export default Footer;