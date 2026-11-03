import Link from "next/link";
import { notFound } from "next/navigation";
import { Theme } from "@/components/Theme"; // Adjust path if Theme.ts is in components or app root

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  createdAt: string;
  developer: {
    name: string;
    role: string;
    githubUrl: string;
  };
  features: string[];
}

// Sample project records (Replace with database query in production)
const sampleProjects: Record<string, Project> = {
  "1": {
    id: "1",
    title: "DevConnect",
    tagline: "Developer portfolio and project discovery platform",
    description:
      "DevConnect is an open platform built for developers to showcase their projects, share GitHub repositories, and connect with other software engineers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/example/devconnect",
    liveUrl: "https://devconnect.example.com",
    createdAt: "October 18, 2026",
    developer: {
      name: "Michael",
      role: "Frontend Developer & CS Student",
      githubUrl: "https://github.com/example",
    },
    features: [
      "Responsive navigation bar with mobile overlay menu",
      "Developer dashboard for project management and profile link privacy",
      "Interactive search & filtering by tech stack across explore pages",
      "Clean server-rendered pages using Next.js App Router",
    ],
  },
  "2": {
    id: "2",
    title: "Smart Money Tracker",
    tagline: "Forex trading journal & market analytics app",
    description:
      "A trading journal application for Forex traders using Smart Money Concepts (SMC) principles to log trades, calculate risk-to-reward ratios, and analyze session performance.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/example/tracker",
    createdAt: "October 12, 2026",
    developer: {
      name: "Alex Chen",
      role: "Fullstack Engineer",
      githubUrl: "https://github.com/example",
    },
    features: [
      "Trade logging with entry, stop loss, and take profit targets",
      "Market session tagging (London, New York, Asia)",
      "Performance metrics & win-rate dashboard analytics",
    ],
  },
  "3": {
    id: "3",
    title: "Mobile E-Commerce Store",
    tagline: "Responsive web store interface",
    description:
      "A fast, modern mobile web store interface designed for searching, viewing specifications, and purchasing smartphones online.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/example/techzone",
    liveUrl: "https://techzone.example.com",
    createdAt: "October 05, 2026",
    developer: {
      name: "Sarah Jenkins",
      role: "UI/UX & Web Developer",
      githubUrl: "https://github.com/example",
    },
    features: [
      "Edge-to-edge responsive layout across mobile, tablet, and desktop",
      "Dynamic filtering by brand, refresh rate, and display size",
      "Interactive shopping cart and checkout UI mockups",
    ],
  },
};

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = sampleProjects[params.id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 sm:px-10 py-12 max-w-5xl mx-auto text-neutral-900">
      
      {/* Back Link */}
      <div className="mb-6">
        <Link 
          href="/explore" 
          className="text-xs font-medium text-neutral-500 hover:underline flex items-center gap-1"
        >
          &larr; Back to Explore Projects
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">{project.title}</h1>
          <p className="text-neutral-600 text-base mt-1">{project.tagline}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-300 rounded text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            GitHub Repository
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: Theme.primary }}
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>

      {/* Screenshot Preview Box */}
      <div className="w-full h-72 sm:h-96 relative bg-neutral-100 rounded-lg border border-neutral-200 overflow-hidden mb-10 flex items-center justify-center">
        <p className="text-sm text-neutral-500">[ Project Screenshot Preview Placeholder ]</p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Description & Features */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">About the Project</h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-700">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar: Tech Stack & Developer Info */}
        <div className="space-y-6">
          <div className="p-5 bg-white border border-neutral-200 rounded-lg">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-neutral-200 rounded-lg">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Created By
            </h3>
            <p className="font-bold text-neutral-900 text-sm">{project.developer.name}</p>
            <p className="text-xs text-neutral-500 mb-3">{project.developer.role}</p>
            <a
              href={project.developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium hover:underline"
              style={{ color: Theme.primary }}
            >
              View GitHub Profile &rarr;
            </a>
          </div>

          <div className="p-5 bg-white border border-neutral-200 rounded-lg text-xs text-neutral-500 flex justify-between">
            <span>Published:</span>
            <span className="font-medium text-neutral-800">{project.createdAt}</span>
          </div>
        </div>

      </div>

    </main>
  );
}