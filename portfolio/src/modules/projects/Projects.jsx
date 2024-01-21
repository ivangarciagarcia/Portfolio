import './projects.css'
import React from 'react';
import { ProjectCard } from '../../components/projectCard/ProjectCard';
import {SearchBar} from '../../components/searchBar/SearchBar';
import { useState, useEffect } from 'react';

export const Projects = () => {

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [allProjects] = useState([
    {
      id: 1,
      imageUrl: "/img/ggbowling.webp",
      title: 'GGBowling',
      description: 'GGBowling es una página web de una bolera-restaurante, diseñada para permitir a los usuarios reservar pistas de bolos, mesas del restaurante y conocer más sobre el establecimiento.',
      githubLink: 'https://github.com/ivangarciagarcia/GGBowling',
      websiteLink: null,
    },
    {
      id: 2,
      imageUrl: '/img/G-Notas.webp',
      title: 'G-Notas',
      description: 'App web creada para facilitar la gestión de las notas de los alumnos a lo largo del tiempo',
      githubLink: 'https://github.com/ivangarciagarcia/G-Notas',
      websiteLink: null,
      
    },
    
    // Agrega más proyectos según sea necesario
  ]);

  const handleSearch = (searchTerm) => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (trimmedSearchTerm === '') {
      // Si la barra de búsqueda está vacía, mostrar todos los proyectos
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter((project) =>
        project.title.toLowerCase().includes(trimmedSearchTerm)
      );
      setFilteredProjects(filtered);
    }
  };

  useEffect(() => {
    // Al iniciar la página, mostrar todos los proyectos
    setFilteredProjects(allProjects);
  }, [allProjects]);


  return (
    <div className="content-wrapper">
      <h1 className='project-titulo'>Proyectos completados</h1>
      <p className='project-subtitulo'>Aquí puedes encontrar todos mis proyectos que he desarrollado a lo largo de mi carrera a modo de entrenamiento.</p>
      <SearchBar onSearch={handleSearch} />

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))
      ) : (
        <p className='notfound'>No se encontraron proyectos con el nombre especificado.</p>
      )}
    </div>
  );
};