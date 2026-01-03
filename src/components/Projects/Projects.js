import React from 'react';
import { projects } from '../../data/portfolioData';
import { FaLink, FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

import zenbolsoImg from '../../assets/images/projects/zenbolso.png';
import zenNotesImg from '../../assets/images/projects/zen-notes.png';
import portfolioImg from '../../assets/images/projects/portfolio.png';

const projectImages = {
  'zenbolso.png': zenbolsoImg,
  'zen-notes.png': zenNotesImg,
  'portfolio.png': portfolioImg
};

const Projects = () => {
  return (
    <section id="projects" className="glass-card">
      <h2>{projects.title}</h2>
      <div className={styles.projectsGrid}>
        {projects.items.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={projectImages[project.image]} alt={`Prévia do projeto ${project.title}`} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechList}>
                {project.technologies.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaLink /> Ver Demo
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Repositório
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;