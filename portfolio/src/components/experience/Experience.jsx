import "./experience.css";

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Web Full Stack',
      company: 'Altia',
      date: 'Septiembre 2023 - Actualidad',
      description: 'Actualmente trabajando con SpringBoot, React y MySQL en el desarollo y mantenimiento de una aplicacion de gestion de proveedores para una destacada empresa.',
    },
    {
      title: 'Desarrollador Web en practicas',
      company: 'Altia',
      date: 'Abril 2022 - Agosto 2023',
      description: 'Introducción al desarrollo full stack con SpringBoot, React y MySQL. Simulaciones de trabajo real e iniciacion en un equipo de trabajo utilizando metodologias agile .'
    },
  ];

  return (
    <div className="experience">
      <h2 className="titulo-seccion">Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-date">{exp.date}</p>
          </div>
          <h4>{exp.company}</h4>
          <p className="exp-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
