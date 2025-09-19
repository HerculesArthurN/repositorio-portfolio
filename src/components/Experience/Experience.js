import React from 'react';
import { professionalExperience } from '../../data/portfolioData'; // Importa os dados
import styles from './Experience.module.css'; // Importa os estilos

const Experience = () => {
  return (
    <section id="experience" className="glass-card">
      <h2>{professionalExperience.title}</h2>

      {professionalExperience.jobs.map((job, index) => (
        <div key={index} className={styles.jobBlock}>
          <h3 className={styles.jobHeader}>
            {job.company} – {job.role}
          </h3>
          <p className={styles.period}>{job.period}</p>
          <p className={styles.description}>{job.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;