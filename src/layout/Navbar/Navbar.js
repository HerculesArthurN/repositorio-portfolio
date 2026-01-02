import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.menuIcon} onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
        <li><a href="#about" onClick={closeMobileMenu}>Sobre</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projetos</a></li>
        <li><a href="#experience" onClick={closeMobileMenu}>Experiência</a></li>
        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#education" onClick={closeMobileMenu}>Educação</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;