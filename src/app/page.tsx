"use client";
import ProjectCard from "@/components/ui/projectCard";
import React from "react";
import { personas } from "./persona/persona";

const HomePage = () => {
  const featuredProjects = personas.filter((project) => project.featured);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-400">Persona AI Chat</h1>
        <p className="text-gray-200 mt-2">
          Explore AI chat personas like Hitesh Choudhary, Piyush Garg, and more.
          Pick your AI guide and start a conversation.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg border border-gray-600 bg-gray-400 hover:shadow-xl transition-shadow p-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
