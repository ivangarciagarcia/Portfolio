import './projects.css'
import React from 'react';
import { ProjectCard } from '../../components/projectCard/ProjectCard';

export const Projects = () => {
  // Definir un array de proyectos
  const projects = [
    {
      id: 1,
      imageUrl: "/img/ggbowling.jpg",
      title: 'GGBowling',
      description: 'GGBowling es una página web de una bolera-restaurante, diseñada para permitir a los usuarios reservar pistas de bolos, mesas del restaurante y conocer más sobre el establecimiento.',
      githubLink: 'https://github.com/ivangarciagarcia/GGBowling',
      websiteLink: null,
    },
    {
      id: 2,
      imageUrl: '/img/G-Notas.png',
      title: 'G-Notas',
      description: 'App web creada para facilitar la gestión de las notas de los alumnos a lo largo del tiempo',
      githubLink: 'https://github.com/ivangarciagarcia/G-Notas',
      websiteLink: null,
      
    },
    
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="content-wrapper">
      <h1 className='project-titulo'>Proyectos completados</h1>
      <p className='project-subtitulo'>Aquí puedes encontrar todos mis proyectos que he desarrollado a lo largo de mi carrera a modo de entrenamiento.</p>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
        />
      ))}
    </div>
  );
};
