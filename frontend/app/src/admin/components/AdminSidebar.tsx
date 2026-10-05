"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Quote,
  Building2,
  Mail,
  LogOut,
  Globe,
} from "lucide-react";
import { useAdminAuth } from "./AdminAuthProvider";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { href: "/admin/clients", label: "Clients / Logos", icon: Building2 },
  { href: "/admin/messages", label: "Contact Messages", icon: Mail },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { admin, logout } = useAdminAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <aside className="dark-section flex h-screen w-64 shrink-0 flex-col justify-between p-6">
      <div>
        <Link href="/" className="flex items-center gap-2 text-white">
          <Globe size={20} className="text-[var(--brand-pink-light)]" />
          <span className="text-sm font-semibold">Admin Panel</span>
        </Link>

        <nav className="mt-10 space-y-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <link.icon size={17} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/10 pt-5">
        <p className="truncate text-xs text-white/50">{admin?.email}</p>
        <button
          onClick={handleLogout}
          className="mt-3 flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </aside>
  );
}
