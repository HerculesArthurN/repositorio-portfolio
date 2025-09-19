import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { personalInfo, objective, languages, aboutMe } from '../../data/portfolioData';
import profilePic from '../../assets/images/profile.jpg';
import styles from './About.module.css';

const About = () => {
  const birthYear = 1999;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section id="about" className={`glass-card ${styles.aboutContainer}`}>
      <div className={styles.profile}>
        <img src={profilePic} alt="Hércules Arthur Nardelli" className={styles.profilePic} />
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.location}>{personalInfo.location}</p>
        <div className={styles.socialLinks}>
          {personalInfo.socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.objective}>
          <h2>{objective.title}</h2>
          <p>{objective.description}</p>
        </div>

        <div className={styles.bioSection}>
          <h2>{aboutMe.title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            {aboutMe.description.replace('{age}', age)}
          </p>
        </div>
        
        <div className={styles.languages}>
          <h2>{languages.title}</h2>
          <div className={styles.languagesList}>
            {languages.list.map((lang) => (
              <div key={lang.name} className={styles.languageItem}>
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  className={styles.languageFlag}
                  title={lang.name}
                />
                <div>
                  <div className={styles.languageName}>{lang.name}</div>
                  <div className={styles.languageLevel}>{lang.level}</div>
                  {lang.details && <div className={styles.languageDetails}>{lang.details}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;