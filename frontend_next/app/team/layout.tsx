import type React from "react";

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
      {children}
    </div>
  );
}
