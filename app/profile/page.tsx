import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import ProfileContent from "./profile-content";

export default async function ProfilePage() {
  const session = await auth();

  // Protect the route
  if (!session) {
    redirect("/signin");
  }

  // Server Action for signing out
  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/signin" });
  }

  return <ProfileContent session={session} signOutAction={handleSignOut} />;
}