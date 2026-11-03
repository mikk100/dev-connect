"use client";

import { useState } from "react";
import { Theme } from "@/components/Theme";

interface Developer {
  id: string;
  name: string;
  role: string;
  skills: string[];
  github: string;
  linkedin?: string;
  email?: string;
}

const sampleDevelopers: Developer[] = [
  {
    id: "dev-1",
    name: "Michael",
    role: "Frontend Developer & CS Student",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "dev-2",
    name: "Alex Chen",
    role: "Fullstack Engineer",
    skills: ["Node.js", "PostgreSQL", "React", "Docker"],
    github: "https://github.com",
  },
  {
    id: "dev-3",
    name: "Sarah Jenkins",
    role: "UI/UX & Web Developer",
    skills: ["HTML", "Tailwind CSS", "JavaScript", "Figma"],
    github: "https://github.com",
    email: "sarah@example.com",
  },
];

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter developers based on name, role, or skills
  const filteredDevelopers = sampleDevelopers.filter((dev) => {
    const query = searchQuery.toLowerCase();
    return (
      dev.name.toLowerCase().includes(query) ||
      dev.role.toLowerCase().includes(query) ||
      dev.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  });

  return (
    <main className="min-h-screen px-6 sm:px-10 py-12 max-w-7xl mx-auto">
      
      {/* Header & Search Bar Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-1">Developers</h1>
          <p className="text-neutral-600 text-sm">
            Discover creators, explore portfolios, and view public GitHub profiles.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, role, or skill..."
            className="w-full px-4 py-2 border border-neutral-300 rounded text-sm text-neutral-900 bg-white focus:outline-none focus:border-neutral-500"
          />
        </div>
      </div>

      {/* Developer Grid */}
      {filteredDevelopers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((dev) => (
            <div key={dev.id} className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-neutral-900 mb-1">{dev.name}</h2>
                <p className="text-sm text-neutral-500 mb-4">{dev.role}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {dev.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs rounded border border-neutral-200 bg-neutral-50 text-neutral-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <a 
                  href={dev.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-neutral-700 font-medium"
                >
                  GitHub Profile
                </a>
                {dev.linkedin && (
                  <a 
                    href={dev.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline font-medium"
                    style={{ color: Theme.primary }}
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-neutral-500 text-sm">
          No developers found matching "{searchQuery}".
        </div>
      )}
    </main>
  );
}