"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Game Hub",
    description: "Games list platform",
    image: "/images/1.png",
    gitUrl: "https://github.com/moewaizzz/game-hub",
    previewUrl: "https://game-hub-pink-mu.vercel.app/",
  },
  {
    id: 2,
    title: " Portfolio Website",
    description: "Project 2 description",
    image: "/images/2.png",
    gitUrl: "/https://github.com/moewaizzz/porfolio-project",
    previewUrl: "porfolio-project-fiur6cwkk-moewaizzzs-projects.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
