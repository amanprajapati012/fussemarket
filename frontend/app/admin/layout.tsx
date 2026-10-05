import type { Metadata } from "next";
import { AdminAuthProvider } from "@/app/src/admin/components/AdminAuthProvider";

export const metadata: Metadata = {
  title: "Admin Panel | Your Company",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--surface-soft)]">
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </div>
  );
}
