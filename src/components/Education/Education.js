import React from 'react';
import { education } from '../../data/portfolioData';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id="education" className="glass-card">
      <h2>{education.title}</h2>
      
      <div className={styles.courseHeader}>
        <h3>{education.course} – {education.institution}</h3>
        <p className={styles.period}>{education.period}</p>
        <p className={styles.description}>{education.description}</p>
      </div>

      <div className={styles.curriculumGrid}>
        {education.curriculum.map((item) => (
          <div key={item.semester} className={styles.semesterBlock}>
            <h4>{item.semester}</h4>
            <p className={styles.subjects}>
              <strong> Disciplinas:</strong> {item.subjects.join(', ')}.
            </p>
            <div className={styles.technologies}>
              {item.technologies.map(tech => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;