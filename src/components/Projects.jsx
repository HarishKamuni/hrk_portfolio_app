import React from 'react';
import CC from '../assets/img/cc.png';
import Devify from '../assets/img/Devify.png';
import TODO from '../assets/img/ToDo.png';
import { Container, ProjectCard } from './index';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gadgets Platform',
      img: Devify,
      link: 'https://github.com/HarishKamuni/hrk_e-commerce_app',
      live: 'https://harishkamuni.github.io/hrk_e-commerce_app/',
    },
    {
      id: 2,
      title: 'Animate',
      img: TODO,
      link: 'https://github.com/HarishKamuni/Animate',
      live: 'https://animate-1.netlify.app/',
    },
    {
      id: 3,
      title: 'Login Authentication using JS',
      img: CC,
      link: 'https://github.com/HarishKamuni/signup.github.io',
      live: 'https://harishkamuni.github.io/signup.github.io/',
    },
    {
      id: 4,
      title: 'TvMaze',
      img: CC,
      link: 'https://github.com/HarishKamuni/ReactFirst',
      live: 'https://harishkamuni.github.io/ReactFirst/',
    },
    {
      id: 5,
      title: 'Coffee Lab',
      img: CC,
      link: 'https://app.netlify.com/sites/venerable-seahorse-3dc2e8/overview',
      live: 'https://venerable-seahorse-3dc2e8.netlify.app/',
    },
  ];

  return (
    <>
      <Container id="projects" className="pt-5 md:py-5">
        <h1 className="py-1 text-2xl font-bold text-gray-400 md:text-4xl font-mooli">
          Projects
        </h1>
        <hr className="border-black/30 dark:border-white/30" />

        <ProjectCard projects={projects} />
      </Container>
    </>
  );
};

export default Projects;
