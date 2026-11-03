import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Theme } from "@/components/Theme";
import Provider from "@/components/provider";
import { auth } from "@/auth"; // <-- 1. Import auth

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevConnect - Developer Portfolio & Project Discovery",
  description: "Showcase your projects, share GitHub links, and discover developers.",
};

// 2. Make RootLayout async to fetch the session on the server
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // <-- 3. Get session data

  return (
    <html lang="en">
      <body 
        className={`${inter.className} min-h-screen text-neutral-900 antialiased`}
        style={{ backgroundColor: Theme.background }}
      >
        <Provider>
          {/* 4. Pass session props into Nav */}
          <Nav isAuthenticated={!!session?.user} user={session?.user} />
          {children}
        </Provider>
      </body>
    </html>
  );
}