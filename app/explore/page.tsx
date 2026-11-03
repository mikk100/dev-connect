"use client";

import { useState } from "react";
import Link from "next/link";
import { Theme } from "@/components/Theme"; // Adjust path if Theme.ts is located elsewhere (e.g. "@/components/Theme")

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  developerName: string;
  githubUrl: string;
  liveUrl?: string;
}

// Note: The IDs ("1", "2", "3") match the sample IDs in your app/project-details/[id]/page.tsx
const sampleProjects: Project[] = [
  {
    id: "1",
    title: "DevConnect",
    tagline: "Developer portfolio and project discovery platform",
    description: "DevConnect is an open platform built for developers to showcase their projects, share GitHub repositories, and connect with other software engineers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    developerName: "Michael",
    githubUrl: "https://github.com/example/devconnect",
    liveUrl: "https://devconnect.example.com",
  },
  {
    id: "2",
    title: "Smart Money Tracker",
    tagline: "Forex trading journal & market analytics app",
    description: "A trading journal application for Forex traders using Smart Money Concepts (SMC) principles to log trades and analyze performance.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    developerName: "Alex Chen",
    githubUrl: "https://github.com/example/tracker",
  },
  {
    id: "3",
    title: "Mobile E-Commerce Store",
    tagline: "Responsive web store interface",
    description: "A fast, modern mobile web store interface designed for searching, viewing specifications, and purchasing smartphones online.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    developerName: "Sarah Jenkins",
    githubUrl: "https://github.com/example/techzone",
    liveUrl: "https://techzone.example.com",
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search input
  const filteredProjects = sampleProjects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
      project.developerName.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen px-6 sm:px-10 py-12 max-w-7xl mx-auto text-neutral-900">
      
      {/* Header & Search Bar Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Explore Projects</h1>
          <p className="text-neutral-600 text-sm">
            Discover open-source repositories, developer tools, and portfolios built by the community.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech (e.g. Next.js)..."
            className="w-full px-4 py-2 border border-neutral-300 rounded text-sm bg-white focus:outline-none focus:border-neutral-500"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-neutral-900 mb-1">{project.title}</h2>
                <p className="text-xs text-neutral-500 mb-3">{project.tagline}</p>
                <p className="text-sm text-neutral-600 mb-4">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Details & Links */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">By {project.developerName}</span>
                <div className="flex items-center gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline font-medium text-neutral-700"
                  >
                    GitHub
                  </a>
                  
                  {/* Dynamic link pointing to /project-details/1, /project-details/2, etc. */}
                  <Link 
                    href={`/project-details/${project.id}`} 
                    className="font-medium hover:underline"
                    style={{ color: Theme.primary }}
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-neutral-500 text-sm">
          No projects found matching "{searchQuery}".
        </div>
      )}
    </main>
  );
}