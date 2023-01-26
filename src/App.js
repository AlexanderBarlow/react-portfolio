import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

const styles = {
    page: {
      background: "#2E294E",
      color: '#FFF',
      height: '100vh'
    }
}

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
