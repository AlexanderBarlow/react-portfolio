import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from  './pages/Resume';
import '../styles/Header.css';

const styles = {
    name: {
        justifyContent: 'center'
    },
    display: {
    
    }
}

//React.Activity24
export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        else if (currentPage === 'Resume') {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div style={styles.display}>
            <h1 style={styles.name}>Alexander Barlow</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
        </div>
    );
}

