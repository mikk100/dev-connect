"use client";

import { useState } from "react";
import Image from "next/image";
import { Theme } from "@/components/Theme";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ name, src, size = "md", className = "" }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-12 h-12 text-base font-bold",
  };

  // If a source is provided and hasn't failed to load, render the image
  if (src && !hasError) {
    return (
      <div className={`relative overflow-hidden rounded-full border border-neutral-200 shrink-0 ${sizeClasses[size]} ${className}`}>
        <Image 
          src={src} 
          alt={name} 
          fill 
          className="object-cover" 
          onError={() => setHasError(true)} // Falls back to initials if image returns 404
        />
      </div>
    );
  }

  // Fallback: Clean colored circle with initial letter
  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-sm ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: Theme.primary }}
      title={name}
    >
      {initial}
    </div>
  );
}