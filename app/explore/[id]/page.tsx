 import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Theme } from "@/components/Theme"; // Adjust path if Theme.ts is in app/Theme

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  createdAt: string;
  developer: {
    name: string;
    role: string;
    githubUrl: string;
    avatarUrl?: string;
  };
  features: string[];
}

// Sample dataset (In a production app, fetch from database by ID)
const sampleProjects: Record<string, Project> = {
  "1": {
    id: "1",
    title: "DevConnect",
    tagline: "Developer portfolio and project discovery platform",
    description:
      "DevConnect is an open platform built for developers to showcase their projects, share GitHub repositories, and connect with other software engineers. It features customizable public social links, developer search, and project discovery.",
    imageUrl: "/projects/devconnect-preview.png", // Replace with your image or placeholder
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
      "Developer dashboard for project management and public link privacy",
      "Interactive search & filtering by tech stack across explore pages",
      "Clean server-rendered pages using Next.js App Router",
    ],
  },
  "2": {
    id: "2",
    title: "Smart Money Tracker",
    tagline: "Forex trading journal & market analytics app",
    description:
      "A trading journal application for Forex traders using Smart Money Concepts (SMC) and Inner Circle Trader (ICT) principles to log trades, calculate risk-to-reward ratios, and analyze session performance.",
    imageUrl: "/projects/tracker-preview.png",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
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
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = sampleProjects[id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 sm:px-10 py-12 max-w-5xl mx-auto text-neutral-900">
      
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Link 
          href="/explore" 
          className="text-xs font-medium text-neutral-500 hover:underline flex items-center gap-1"
        >
          &larr; Back to Explore Projects
        </Link>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            {project.title}
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Action Buttons */}
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

      {/* Project Screenshot / Image Container */}
      <div className="w-full h-72 sm:h-96 relative bg-neutral-100 rounded-lg border border-neutral-200 overflow-hidden mb-10 flex items-center justify-center">
        {/* Replace with actual image or fallback UI */}
        <div className="text-center p-6 text-neutral-400 text-sm">
          <p className="font-semibold text-neutral-600 mb-1">[ Project Screenshot Preview ]</p>
          <p className="text-xs">Image path: {project.imageUrl}</p>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column (2 Cols): Overview & Key Features */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">About the Project</h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-neutral-700">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column (1 Col): Sidebar Info & Metadata */}
        <div className="space-y-6">
          
          {/* Tech Stack */}
          <div className="p-5 bg-white border border-neutral-200 rounded-lg">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Card */}
          <div className="p-5 bg-white border border-neutral-200 rounded-lg">
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              Created By
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: Theme.primary }}
              >
                {project.developer.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-sm">{project.developer.name}</p>
                <p className="text-xs text-neutral-500">{project.developer.role}</p>
              </div>
            </div>
            <a
              href={project.developer.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium hover:underline block"
              style={{ color: Theme.primary }}
            >
              View Developer Profile &rarr;
            </a>
          </div>

          {/* Metadata */}
          <div className="p-5 bg-white border border-neutral-200 rounded-lg text-xs text-neutral-500 space-y-2">
            <div className="flex justify-between">
              <span>Published:</span>
              <span className="font-medium text-neutral-800">{project.createdAt}</span>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}