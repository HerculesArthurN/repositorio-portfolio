import React from 'react';

import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;