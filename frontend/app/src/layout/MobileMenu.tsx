"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "../data/nav";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[var(--border)] bg-white lg:hidden">
      <div className="container-premium flex flex-col gap-1 py-4">
        {navItems.map((item) => (
          <div key={item.label} className="border-b border-[var(--border)] py-1">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex-1 py-3 text-base font-medium text-[var(--text-primary)]"
              >
                {item.label}
              </Link>

              {item.megaMenu && (
                <button
                  aria-label={`Expand ${item.label}`}
                  onClick={() =>
                    setExpanded((cur) => (cur === item.label ? null : item.label))
                  }
                  className="p-3 text-[var(--text-secondary)]"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      expanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {item.megaMenu && expanded === item.label && (
              <div className="grid grid-cols-1 gap-4 pb-4 pl-2 sm:grid-cols-2">
                {item.megaMenu.map((col) => (
                  <div key={col.heading}>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--brand-pink)]">
                      {col.heading}
                    </p>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/contact" onClick={onClose} className="btn-brand mt-4 w-full text-sm">
          Get Consultation
        </Link>
      </div>
    </div>
  );
}
