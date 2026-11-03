"use client";

import { useState } from "react";
import Link from "next/link";
import { Theme } from "@/components/Theme";

interface ProfileContentProps {
  session: any;
  signOutAction: () => Promise<void>;
}

export default function ProfileContent({ session, signOutAction }: ProfileContentProps) {
  const userName = session?.user?.name || "Developer";
  const userEmail = session?.user?.email || "";
  const userImage = session?.user?.image;

  // Bio state
  const [bio, setBio] = useState(
    "Frontend and full-stack software developer passionate about building clean user interfaces, robust web applications, and contributing to the open-source developer ecosystem."
  );
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState(bio);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveBio = async () => {
    setIsSaving(true);

    // Simulate saving (Replace this with an API call/Server Action to persist to database)
    await new Promise((resolve) => setTimeout(resolve, 500));

    setBio(tempBio);
    setIsEditingBio(false);
    setIsSaving(false);
  };

  const handleCancelBio = () => {
    setTempBio(bio);
    setIsEditingBio(false);
  };

  return (
    <div className="min-h-screen transition-colors font-sans bg-[#FAFAFA] text-neutral-900">
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
            <Link
              href="/dashboard"
              className="text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Back to Dashboard
            </Link>

            <form action={signOutAction}>
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

      {/* Main Profile Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        
        {/* Profile Card Header */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {userImage ? (
                <img
                  src={userImage}
                  alt={userName}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-neutral-300 shadow-sm"
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-xl text-white font-extrabold flex items-center justify-center text-2xl shadow-sm"
                  style={{ backgroundColor: Theme.primary }}
                >
                  {userName[0]}
                </div>
              )}
              
              <div className="space-y-1">
                <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight">{userName}</h1>
                <p className="text-sm text-neutral-500 font-medium">{userEmail}</p>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-200">
                  Verified Developer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/submit-project"
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-white text-xs font-bold shadow-sm hover:opacity-95 transition-all text-center"
                style={{ backgroundColor: Theme.primary }}
              >
                + Add Project
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Bio & Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column: Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Portfolio Stats
              </h2>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                <span className="text-sm text-neutral-600 font-medium">Published Projects</span>
                <span className="text-sm font-extrabold text-neutral-900">0</span>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                <span className="text-sm text-neutral-600 font-medium">Account Status</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editable Bio & Connected Accounts */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Editable About Developer Section */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                  About Developer
                </h2>
                {!isEditingBio && (
                  <button
                    type="button"
                    onClick={() => {
                      setTempBio(bio);
                      setIsEditingBio(true);
                    }}
                    className="text-xs font-bold text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-3 py-1 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Edit Bio
                  </button>
                )}
              </div>

              {isEditingBio ? (
                <div className="space-y-3">
                  <textarea
                    rows={4}
                    value={tempBio}
                    onChange={(e) => setTempBio(e.target.value)}
                    placeholder="Write a brief bio about yourself..."
                    className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 resize-none"
                  />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleCancelBio}
                      disabled={isSaving}
                      className="px-3.5 py-1.5 text-xs font-bold text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveBio}
                      disabled={isSaving}
                      className="px-3.5 py-1.5 text-xs font-bold text-white rounded-lg transition-all hover:opacity-95 cursor-pointer disabled:opacity-50"
                      style={{ backgroundColor: Theme.primary }}
                    >
                      {isSaving ? "Saving..." : "Save Bio"}
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {bio}
                </p>
              )}
            </div>

            {/* Connected Accounts Section */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-4 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                Connected Accounts
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                  <span className="flex items-center gap-2">
                    🔓 Authenticated via NextAuth Session
                  </span>
                  <span className="text-emerald-600 font-bold">Connected</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}