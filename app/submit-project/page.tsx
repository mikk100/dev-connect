import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SubmitProjectForm from "./submit-project-form";

export default async function SubmitProjectPage() {
  const session = await auth();

  // Protect route server-side: redirect to signin if not logged in[cite: 2]
  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="min-h-[calc(100vh-73px)] bg-gradient from-neutral-50 to-neutral-100/60 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white border border-neutral-200/80 rounded-2xl shadow-xl shadow-neutral-200/50 p-6 sm:p-10">
        <div className="mb-8">
          <span className="inline-block text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1">
            DevConnect Showcase
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Submit a Project
          </h1>
          <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
            Share your repository link, live demo, and build stack with the developer community.
          </p>
        </div>

        {/* Pass the session down to the client form */}
        <SubmitProjectForm session={session} />
      </div>
    </main>
  );
}