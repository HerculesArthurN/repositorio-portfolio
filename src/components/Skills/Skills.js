import React from 'react';
import { technicalSkills } from '../../data/portfolioData';
import styles from './Skills.module.css';

const Skills = () => {

  return (
    <section id="skills" className="glass-card">
      <h2>{technicalSkills.title}</h2>
      <div className={styles.skillsGrid}>
        {technicalSkills.categories.map(category => (
          <div key={category.name} className={styles.skillCategory}>
            <h3>{category.name}</h3>
            <ul>
              {category.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;