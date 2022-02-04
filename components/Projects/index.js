import React from 'react';
import styles from './Projects.module.css'
import { projects } from '../../data/projects';

const Projects = () => {
    

  return (
    <div className={styles.featuresContainer} >
      <h1 className={styles.subTitle}>Projects</h1>
    <div className={styles.items}>
        <ul className={styles.autoGrid}>
            {
              projects.map((post) => (
                <li key={post.id} className={styles.listItem}>
                <img className={styles.imgThumbnail} src={post.image} alt={post.name} />
                <h2 style={{cursor: 'pointer'}}>
                  <a style={{color: 'black', paddingRight: '8px'}} href={post.slug} target="_blank">{post.name}</a>
                </h2>
                <p className={styles.description}>{post.description}</p>
            </li>
              ))
            }
        </ul>

    </div>

    </div>
    )
};

export default Projects;
