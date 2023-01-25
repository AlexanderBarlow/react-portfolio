import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/About';
import Resume from  './pages/Resume';
import '../styles/Header.css';

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
        else {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
        </div>
    );
}

