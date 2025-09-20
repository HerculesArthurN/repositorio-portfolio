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
            {/* Trocamos <ul> por <div> para melhor controle com flexbox */}
            <div className={styles.skillsList}>
              {category.skills.map(skill => (
                <div key={skill.name} className={styles.skillTag}>
                  {/* Renderiza o ícone se ele existir */}
                  {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;