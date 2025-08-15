"use client";

import { Project } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";

import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl overflow-hidden">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={400}
            className="w-full h-full object-cover  rounded-xl transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center rounded-xl bg-gray-100 text-gray-500 p-4">
            <span className="text-5xl mb-2">🤖</span>
            <p className="text-sm font-medium">
              {project.category || "AI Persona"}
            </p>
          </div>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Star size={12} fill="currentColor" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full font-medium border border-gray-700">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-black border border-gray-700 text-gray-300 text-xs px-2 py-1 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              className="flex-1 bg-white text-black hover:bg-gray-200 text-center py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <ExternalLink size={14} />
              <span>Chat with AI </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
