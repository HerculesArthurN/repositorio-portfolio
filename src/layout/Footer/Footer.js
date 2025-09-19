import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>&copy; {new Date().getFullYear()} Hércules Arthur Nardelli. Todos os direitos reservados.</p>
      <p>Desenvolvido em React e inspirado no conceito visual de vidro líquido.</p>
    </footer>
  );
}

export default Footer;