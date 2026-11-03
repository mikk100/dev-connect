import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Theme } from "@/components/Theme";

export default async function DashboardPage() {
  const session = await auth();

  // Protect the route: Redirect unauthenticated users to Sign In
  if (!session) {
    redirect("/signin");
  }

  // User details from active session
  const userName = session.user?.name || "Developer";
  const userEmail = session.user?.email || "";
  const userImage = session.user?.image;

  // Placeholder for user projects
  const userProjects: Array<{
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
  }> = [];

  return (
    <div
      className="min-h-screen transition-colors font-sans bg-[#FAFAFA] text-neutral-900"
    >
      {/* Header Navigation */}
      <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-neutral-900">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm"
              style={{ backgroundColor: Theme.primary }}
            >
              DC
            </div>
            <span>DevConnect</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {userImage ? (
                <img
                  src={userImage}
                  alt={userName}
                  className="w-9 h-9 rounded-lg object-cover border border-neutral-300"
                />
              ) : (
                <div
                  className="w-9 h-9 rounded-lg text-white font-bold flex items-center justify-center text-sm shadow-sm"
                  style={{ backgroundColor: Theme.primary }}
                >
                  {userName[0]}
                </div>
              )}
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-neutral-900 leading-tight">{userName}</p>
                <p className="text-xs text-neutral-500">{userEmail}</p>
              </div>
            </div>

            {/* Server-Side Sign Out Action */}
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/signin" });
              }}
            >
              <button
                type="submit"
                className="p-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-red-600 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                title="Sign Out"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Welcome back, {userName} 👋
            </h1>
            <p className="text-sm text-neutral-600">
              Manage your developer profile, showcase your build projects, and track engagement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/explore"
              className="px-4 py-2.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-sm font-bold flex items-center gap-2 transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              href="/submit-project"
              className="px-4 py-2.5 rounded-lg text-white text-sm font-bold flex items-center gap-2 shadow-sm hover:opacity-95 transition-all cursor-pointer"
              style={{ backgroundColor: Theme.primary }}
            >
              Add Project
            </Link>
          </div>
        </div>

        {/* Overview Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 flex items-center justify-between shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                My Published Projects
              </p>
              <p className="text-3xl font-extrabold text-neutral-900">
                {userProjects.length}
              </p>
            </div>
            <div className="p-3 bg-neutral-100 rounded-lg text-neutral-700">
              📁
            </div>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 p-6 flex items-center justify-between shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Profile Status
              </p>
              <p className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active Portfolio
              </p>
            </div>
            <Link
              href="/profile"
              className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-lg border border-neutral-300 transition-colors flex items-center gap-1"
            >
              View Profile
            </Link>
          </div>
        </div>

        {/* My Projects Grid & Empty State */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-neutral-900">
              My Projects
            </h2>
            <Link
              href="/submit-project"
              className="text-xs font-bold text-neutral-700 hover:text-neutral-900 flex items-center gap-1 transition-colors"
            >
              + Create New
            </Link>
          </div>

          {userProjects.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-neutral-300 p-10 text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-500 mx-auto flex items-center justify-center font-bold">
                📁
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-neutral-900">
                  You haven't published any projects yet
                </h3>
                <p className="text-xs text-neutral-500">
                  Share your GitHub repositories, live deployments, and tech stack with developers worldwide.
                </p>
              </div>
              <Link
                href="/submit-project"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-xs font-bold shadow transition-all hover:opacity-95"
                style={{ backgroundColor: Theme.primary }}
              >
                + Publish Your First Project
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl border border-neutral-200 p-5 flex flex-col justify-between space-y-4 shadow-sm hover:border-neutral-300 transition-all"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-900">{project.title}</h3>
                    <p className="text-xs text-neutral-600 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-xs font-semibold">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                    >
                      Code ↗
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/submit-project"
              className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span>Add a Project</span>
              <span>↗</span>
            </Link>

            <Link
              href="/profile"
              className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span>Edit Profile</span>
              <span>↗</span>
            </Link>

            <Link
              href="/explore"
              className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span>Explore Community</span>
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}