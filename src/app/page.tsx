"use client";
import ProjectCard from "@/components/ui/projectCard";
import React from "react";
import { personas } from "./persona/persona";

const HomePage = () => {
  const featuredProjects = personas.filter((project) => project.featured);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"></div>
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default HomePage;
