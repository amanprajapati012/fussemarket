"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { adminApi } from "@/app/src/admin/lib/adminApi";
import { useAdminAuth } from "@/app/src/admin/components/AdminAuthProvider";

export default function AdminLoginPage() {
  const router = useRouter();
  const { refresh } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await adminApi.login(email, password);
      await refresh();
      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-background flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="premium-card w-full max-w-sm p-8">
        <h1 className="text-center text-xl font-semibold text-[var(--text-primary)]">
          Admin Login
        </h1>
        <p className="mt-1.5 text-center text-sm text-[var(--text-secondary)]">
          Sign in to manage your website content
        </p>

        <div className="mt-8 space-y-4">
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-xl border border-[var(--border)] py-3 pl-11 pr-4 text-sm outline-none"
            />
          </div>

          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-[var(--border)] py-3 pl-11 pr-4 text-sm outline-none"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

        <button type="submit" disabled={loading} className="btn-brand mt-6 w-full text-sm disabled:opacity-60">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
