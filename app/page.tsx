import Link from "next/link";
import { Theme } from "@/components/Theme";

// Server Action for handling user registration
async function registerUser(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const githubUrl = formData.get("githubUrl");

  // TODO: Add database logic (Prisma/Supabase) here
  console.log("New user registered:", { name, email, githubUrl });
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-16 max-w-7xl mx-auto text-neutral-900">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 gap-6 max-w-4xl mx-auto">
        

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
          Showcase your work. Discover <span style={{ color: Theme.primary }}>developer projects</span>.
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
          DevConnect is the minimalist space for software engineers to build visibility, publish GitHub repositories, highlight tech stacks, and discover community projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
          <a
            href="#signup-section"
            className="px-6 py-3 rounded text-white font-medium text-center shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: Theme.primary }}
          >
            Get Started
          </a>
          <Link
            href="/explore"
            className="px-6 py-3 rounded border border-neutral-300 text-neutral-900 font-medium text-center bg-white hover:bg-neutral-50"
          >
            Explore Projects
          </Link>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-16 my-12 border-t border-b border-neutral-200 bg-neutral-50 -mx-6 sm:-mx-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white border border-neutral-200 rounded-lg">
            <div className="w-8 h-8 rounded mb-4 flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: Theme.primary }}>
              01
            </div>
            <h3 className="font-bold text-neutral-900 text-base mb-2">Publish Repositories</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Submit your web apps, open-source utilities, and personal projects with GitHub repository links and live demo URLs.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-lg">
            <div className="w-8 h-8 rounded mb-4 flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: Theme.primary }}>
              02
            </div>
            <h3 className="font-bold text-neutral-900 text-base mb-2">Search by Tech Stack</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Filter developer projects by framework, programming language, or tech stack keywords to find relevant inspiration.
            </p>
          </div>

          <div className="p-6 bg-white border border-neutral-200 rounded-lg">
            <div className="w-8 h-8 rounded mb-4 flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: Theme.primary }}>
              03
            </div>
            <h3 className="font-bold text-neutral-900 text-base mb-2">Developer Directory</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Build your public profile, share social channels, and discover other developers across the community.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Featured Projects</h2>
            <p className="text-xs text-neutral-500 mt-0.5">Explore community submissions on DevConnect.</p>
          </div>
          <Link href="/explore" className="text-sm font-medium hover:underline" style={{ color: Theme.primary }}>
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">DevConnect</h3>
              <p className="text-xs text-neutral-500 mb-3">Developer portfolio & project discovery platform</p>
              <p className="text-sm text-neutral-600 mb-4">
                An open platform built for developers to showcase their projects, share GitHub repositories, and connect.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">Next.js</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">TypeScript</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">Tailwind</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-neutral-100 text-xs">
              <span className="text-neutral-500">By Michael</span>
              <Link href="/project-details/1" className="font-medium hover:underline" style={{ color: Theme.primary }}>
                View Details &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Smart Money Tracker</h3>
              <p className="text-xs text-neutral-500 mb-3">Forex trading journal & market analytics app</p>
              <p className="text-sm text-neutral-600 mb-4">
                A trading journal application for Forex traders using Smart Money Concepts (SMC) principles to log trades.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">React</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">Node.js</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">PostgreSQL</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-neutral-100 text-xs">
              <span className="text-neutral-500">By Alex Chen</span>
              <Link href="/project-details/2" className="font-medium hover:underline" style={{ color: Theme.primary }}>
                View Details &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border border-neutral-200 rounded-lg flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">Mobile E-Commerce Store</h3>
              <p className="text-xs text-neutral-500 mb-3">Responsive smartphone web store mockup</p>
              <p className="text-sm text-neutral-600 mb-4">
                A fast, modern mobile web store interface designed for searching, viewing specifications, and purchasing devices.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">HTML</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">Tailwind</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded border border-neutral-200 bg-neutral-50 text-neutral-700">JS</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-neutral-100 text-xs">
              <span className="text-neutral-500">By Sarah Jenkins</span>
              <Link href="/project-details/3" className="font-medium hover:underline" style={{ color: Theme.primary }}>
                View Details &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Sign-Up / Registration Section */}
      <section id="signup-section" className="py-20 mt-16 border-t border-neutral-200 max-w-xl mx-auto">
        <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Join DevConnect Today</h2>
            <p className="text-xs text-neutral-500">
              Create your account to publish repositories and share your developer profile.
            </p>
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="w-full mb-6 py-2.5 px-4 border border-neutral-300 rounded text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.15 21.32 7.22 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.18C.43 8.12 0 9.81 0 12s.43 3.88 1.18 5.39l4.09-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.15 2.68 1.18 6.61l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            Sign up with Google
          </button>

          <div className="flex items-center my-4 text-neutral-300">
            <div className="flex-1 border-t border-neutral-200"></div>
            <span className="px-3 text-xs text-neutral-400 uppercase">Or with email</span>
            <div className="flex-1 border-t border-neutral-200"></div>
          </div>

          {/* Server Action Form */}
          <form action={registerUser} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Michael Esikalam"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">GitHub Profile URL</label>
              <input
                type="url"
                name="githubUrl"
                required
                placeholder="https://github.com/username"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded focus:outline-none focus:border-neutral-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded text-white font-medium text-sm transition-opacity hover:opacity-90 mt-2"
              style={{ backgroundColor: Theme.primary }}
            >
              Create Account
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}