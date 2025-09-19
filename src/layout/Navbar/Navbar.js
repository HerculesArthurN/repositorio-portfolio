import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navLinks}>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#education">Educação</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;