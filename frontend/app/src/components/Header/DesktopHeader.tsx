
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import MegaMenu from "./MegaMenu";
import {
  navigation,
  standaloneNavigation,
  type NavigationItem,
} from "./navigation";

type DesktopHeaderProps = {
  onNavigate?: () => void;
};

export default function DesktopHeader({
  onNavigate,
}: DesktopHeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const activeNavigationItem =
    navigation.find(
      (item) => item.label === activeMenu
    ) ?? null;

  const openMenu = (label: string) => {
    setActiveMenu(label);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const handleNavigationClick = (
    item: NavigationItem
  ) => {
    if (item.groups?.length) {
      setActiveMenu((current) =>
        current === item.label ? null : item.label
      );

      return;
    }

    onNavigate?.();
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
    onNavigate?.();
  };

  return (
    <div
      className="
        relative
        hidden
        lg:block
      "
      onMouseLeave={closeMenu}
    >
      <nav
        aria-label="Main navigation"
        className="
          flex
          items-center
          justify-center
          gap-0.5
        "
      >
        {/* MAIN NAVIGATION */}

        {navigation.map((item) => {
          const isActive =
            activeMenu === item.label;

          const hasMegaMenu =
            Boolean(item.groups?.length);

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (hasMegaMenu) {
                  openMenu(item.label);
                }
              }}
            >
              {hasMegaMenu ? (
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-haspopup="true"
                  onClick={() =>
                    handleNavigationClick(item)
                  }
                  className={`
                    group
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    px-3
                    py-2.5
                    text-[13px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? `
                          bg-[var(--surface-pink)]
                          text-[var(--brand-pink)]
                        `
                        : `
                          text-[var(--text-primary)]
                          hover:bg-[var(--surface-pink)]
                          hover:text-[var(--brand-pink)]
                        `
                    }
                  `}
                >
                  <span>{item.label}</span>

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        isActive
                          ? "rotate-180"
                          : "group-hover:translate-y-0.5"
                      }
                    `}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    px-3
                    py-2.5
                    text-[13px]
                    font-medium
                    text-[var(--text-primary)]
                    transition-all
                    duration-200
                    hover:bg-[var(--surface-pink)]
                    hover:text-[var(--brand-pink)]
                  "
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}

        {/* STANDALONE LINKS */}

        {standaloneNavigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={handleLinkClick}
            className="
              rounded-full
              px-3
              py-2.5
              text-[13px]
              font-medium
              text-[var(--text-primary)]
              transition-all
              duration-200
              hover:bg-[var(--surface-pink)]
              hover:text-[var(--brand-pink)]
            "
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* COMPACT FLYOUT */}

      <MegaMenu
        item={activeNavigationItem}
        isOpen={Boolean(activeNavigationItem)}
        onClose={closeMenu}
      />
    </div>
  );
}
