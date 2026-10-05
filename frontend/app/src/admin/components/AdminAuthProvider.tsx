"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { adminApi } from "../lib/adminApi";

interface AdminUser {
  name: string;
  email: string;
  role: string;
}

interface AuthContextValue {
  admin: AdminUser | null;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const res = await adminApi.me();
      setAdmin(res.admin);
    } catch {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await adminApi.logout().catch(() => {});
    setAdmin(null);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ admin, loading, refresh, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
