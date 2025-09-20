import React from 'react';

import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default HomePage;