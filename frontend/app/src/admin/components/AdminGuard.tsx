"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "./AdminAuthProvider";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { admin, loading } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !admin) {
      router.replace("/admin/login");
    }
  }, [loading, admin, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-sm text-[var(--text-secondary)]">
        Checking session...
      </div>
    );
  }

  if (!admin) return null;

  return <>{children}</>;
}
