import Link from "next/link";
import { redirect } from "next/navigation";
import { Theme } from "@/components/Theme";
import { auth, signIn } from "@/auth";

// Server Action to handle email/password sign-in
async function handleSignIn(formData: FormData) {
  "use server";
  
  const email = formData.get("email");
  const password = formData.get("password");

  // TODO: Add your email/password authentication logic here
  console.log("Sign in attempt with:", { email, password });
}

export default async function SignInPage() {
  // Read session on the server (Teacher's method)
  const session = await auth();

  // If already logged in, redirect user to home/posts page
  if (session?.user) {
    redirect("/");
  }
  console.log(session);

  return (
    <main className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12 bg-[#F8FAF7]">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-lg p-8 shadow-sm">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            Sign in to DevConnect
          </h1>
          <p className="text-sm text-neutral-600">
            Access your developer portfolio and manage your projects
          </p>
        </div>

        {/* GitHub Sign In Button */}
        <form 
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }} 
          className="mb-3"
        >
          <button 
            type="submit"
            className="w-full py-2.5 px-4 rounded border border-neutral-300 text-neutral-700 font-medium text-sm flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 transition-colors shadow-sm cursor-pointer"
          >
            {/* GitHub SVG Icon */}
            <svg className="w-4 h-4 fill-current text-neutral-900" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Sign in with GitHub
          </button>
        </form>

        {/* Google Sign In Button */}
        <form 
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }} 
          className="mb-6"
        >
          <button 
            type="submit"
            className="w-full py-2.5 px-4 rounded border border-neutral-300 text-neutral-700 font-medium text-sm flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 transition-colors shadow-sm cursor-pointer"
          >
            {/* Google SVG Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.87z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.17 21.31 7.24 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.18C.43 8.13 0 9.83 0 12s.43 3.87 1.18 5.39l4.09-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.69 1.18 6.61l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            Continue with Google
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200"></div>
          </div>
          <span className="relative px-3 bg-white text-xs uppercase tracking-wider text-neutral-500 font-medium">
            Or with email
          </span>
        </div>

        {/* Server Action Form */}
        <form action={handleSignIn} className="flex flex-col gap-4">
          
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-neutral-700 mb-1.5"
            >
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              placeholder="developer@example.com"
              className="w-full px-3 py-2 border border-neutral-300 rounded text-sm text-neutral-900 focus:outline-none focus:border-neutral-500 bg-white"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-neutral-700"
              >
                Password
              </label>
              <Link 
                href="/forgot-password" 
                className="text-xs hover:underline"
                style={{ color: Theme.primary }}
              >
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-neutral-300 rounded text-sm text-neutral-900 focus:outline-none focus:border-neutral-500 bg-white"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 rounded text-white font-medium text-sm mt-2 transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
            style={{ backgroundColor: Theme.primary }}
          >
            Sign In
          </button>

        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-neutral-600 mt-6">
          Don't have an account?{" "}
          <Link 
            href="/signup" 
            className="font-medium hover:underline"
            style={{ color: Theme.primary }}
          >
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
}