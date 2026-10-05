
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { MegaMenuGroup, NavigationItem } from "./navigation";

type MegaMenuProps = {
  item: NavigationItem | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function MegaMenu({
  item,
  isOpen,
  onClose,
}: MegaMenuProps) {
  const groups = item?.groups ?? [];

  const [activeGroup, setActiveGroup] =
    useState<MegaMenuGroup | null>(groups[0] ?? null);

  /* ---------------------------------------------------------
     RESET ACTIVE GROUP
  --------------------------------------------------------- */

  useEffect(() => {
    if (isOpen) {
      setActiveGroup(groups[0] ?? null);
    }
  }, [item, isOpen]);

  /* ---------------------------------------------------------
     ESCAPE KEY
  --------------------------------------------------------- */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!item || !isOpen || !groups.length) {
    return null;
  }

  /*
    Techsaga-style compact navigation:

    Main menu
    ┌─────────────────────────┐
    │ Software & Product   →  │────┐
    │ IT Infrastructure     → │    │
    │ Digital Marketing     → │    │ Services
    │ UI / UX & Creative    → │    │
    │ Testing & QA          → │    │
    └─────────────────────────┘    │
                                   └───────────
  */

  return (
    <div
      className="
        absolute
        left-0
        top-full
        z-[80]
        hidden
        pt-3
        lg:block
      "
      onMouseEnter={() => undefined}
    >
      <div
        className="
          relative
          flex
          items-start
        "
      >
        {/* =====================================================
            MAIN CATEGORY MENU
        ====================================================== */}

        <div
          className="
            w-[300px]
            overflow-hidden
            rounded-[18px]
            border
            border-[var(--border)]
            bg-white
            p-2
            shadow-[var(--shadow-lg)]
          "
        >
          {groups.slice(0, 5).map((group) => {
            const Icon = group.icon;

            const isActive =
              activeGroup?.title === group.title;

            return (
              <button
                key={group.title}
                type="button"
                onMouseEnter={() => setActiveGroup(group)}
                onFocus={() => setActiveGroup(group)}
                onClick={() => setActiveGroup(group)}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-[12px]
                  px-3
                  py-2.5
                  text-left
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
                {/* ICON */}

                <span
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-[10px]
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? `
                          bg-[var(--brand-pink)]
                          text-white
                        `
                        : `
                          bg-[var(--blue-soft)]
                          text-[var(--brand-blue)]
                          group-hover:bg-[var(--brand-pink)]
                          group-hover:text-white
                        `
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>

                {/* TITLE */}

                <span className="min-w-0 flex-1">
                  <span
                    className={`
                      block
                      truncate
                      text-[12px]
                      font-semibold
                      tracking-[-0.01em]
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "text-[var(--brand-pink)]"
                          : "text-[var(--text-primary)]"
                      }
                    `}
                  >
                    {group.title}
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      truncate
                      text-[10px]
                      text-[var(--text-secondary)]
                    "
                  >
                    {group.items.length}{" "}
                    {group.items.length === 1
                      ? "service"
                      : "services"}
                  </span>
                </span>

                {/* ARROW */}

                <ChevronRight
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    shrink-0
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? `
                          translate-x-0.5
                          text-[var(--brand-pink)]
                        `
                        : `
                          text-[var(--text-secondary)]
                          opacity-60
                          group-hover:translate-x-0.5
                          group-hover:text-[var(--brand-pink)]
                        `
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* =====================================================
            RIGHT SERVICE FLYOUT
        ====================================================== */}

        {activeGroup && (
          <div
            key={activeGroup.title}
            className="
              ml-2
              w-[330px]
              overflow-hidden
              rounded-[18px]
              border
              border-[var(--border)]
              bg-white
              p-2
              shadow-[var(--shadow-lg)]
              animate-in
              fade-in
              slide-in-from-left-1
              duration-200
            "
          >
            {/* HEADER */}

            <div
              className="
                border-b
                border-[var(--border)]
                px-3
                pb-2.5
                pt-2
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--brand-pink)]
                "
              >
                {item.label}
              </p>

              <Link
                href={activeGroup.href}
                onClick={onClose}
                className="
                  mt-0.5
                  flex
                  items-center
                  gap-1
                  text-[13px]
                  font-semibold
                  tracking-[-0.02em]
                  text-[var(--text-primary)]
                  transition-colors
                  duration-200
                  hover:text-[var(--brand-pink)]
                "
              >
                {activeGroup.title}

                <ChevronRight
                  size={13}
                  strokeWidth={1.8}
                  className="
                    text-[var(--brand-blue)]
                  "
                />
              </Link>
            </div>

            {/* SERVICES */}

            <div className="p-1">
              {activeGroup.items.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={onClose}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[11px]
                      px-2.5
                      py-2
                      transition-all
                      duration-200
                      hover:bg-[var(--surface-pink)]
                    "
                  >
                    {/* SERVICE ICON */}

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-[9px]
                        bg-[var(--blue-soft)]
                        text-[var(--brand-blue)]
                        transition-all
                        duration-200
                        group-hover:bg-[var(--brand-pink)]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                      />
                    </span>

                    {/* SERVICE NAME */}

                    <span className="min-w-0 flex-1">
                      <span
                        className="
                          block
                          truncate
                          text-[11px]
                          font-semibold
                          text-[var(--text-primary)]
                          transition-colors
                          duration-200
                          group-hover:text-[var(--brand-pink)]
                        "
                      >
                        {service.title}
                      </span>

                      {service.description && (
                        <span
                          className="
                            mt-0.5
                            block
                            truncate
                            text-[9px]
                            leading-4
                            text-[var(--text-secondary)]
                          "
                        >
                          {service.description}
                        </span>
                      )}
                    </span>

                    {/* ARROW */}

                    <ChevronRight
                      size={13}
                      strokeWidth={1.8}
                      className="
                        shrink-0
                        text-[var(--brand-blue-light)]
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
