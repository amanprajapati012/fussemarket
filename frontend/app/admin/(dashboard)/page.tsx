"use client";

import { useEffect, useState } from "react";
import { Briefcase, Users, Quote, Building2, Mail } from "lucide-react";
import { adminApi } from "@/app/src/admin/lib/adminApi";
import { useAdminAuth } from "@/app/src/admin/components/AdminAuthProvider";

const cards = [
  { key: "services", label: "Services", icon: Briefcase, listKey: "services" },
  { key: "team", label: "Team Members", icon: Users, listKey: "members" },
  { key: "testimonials", label: "Testimonials", icon: Quote, listKey: "testimonials" },
  { key: "clients", label: "Clients", icon: Building2, listKey: "clients" },
  { key: "contact", label: "Messages", icon: Mail, listKey: "messages" },
];

export default function AdminDashboardPage() {
  const { admin } = useAdminAuth();
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    cards.forEach(async (card) => {
      try {
        const res = await adminApi.list<Record<string, unknown[]>>(card.key);
        setCounts((prev) => ({ ...prev, [card.key]: res[card.listKey]?.length ?? 0 }));
      } catch {
        setCounts((prev) => ({ ...prev, [card.key]: 0 }));
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        Welcome back, {admin?.name || "Admin"}
      </h1>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        Manage everything shown on your public website from here.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.key} className="premium-card flex items-center gap-4 p-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              <card.icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {counts[card.key] ?? "-"}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
