
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import {
  navigation,
  standaloneNavigation,
} from "./navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(
    null
  );

  const [activeGroup, setActiveGroup] = useState<string | null>(
    null
  );

  /*
   * ---------------------------------------------------------
   * CLOSE MENU
   * ---------------------------------------------------------
   */

  const closeMenu = () => {
    setActiveMenu(null);
    setActiveGroup(null);
    onClose();
  };

  /*
   * ---------------------------------------------------------
   * TOGGLE TOP LEVEL MENU
   * ---------------------------------------------------------
   */

  const toggleMenu = (label: string) => {
    setActiveMenu((current) =>
      current === label ? null : label
    );

    setActiveGroup(null);
  };

  /*
   * ---------------------------------------------------------
   * TOGGLE GROUP
   * ---------------------------------------------------------
   */

  const toggleGroup = (title: string) => {
    setActiveGroup((current) =>
      current === title ? null : title
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-x-0
        top-[var(--header-height,72px)]
        bottom-0
        z-[90]
        overflow-y-auto
        bg-[var(--background)]
        lg:hidden
      "
    >
      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-2xl
          px-4
          pb-8
          pt-4
        "
      >
        {/* ===================================================
            MAIN NAVIGATION
        ==================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-pink)]
            shadow-[var(--shadow-sm)]
          "
        >
          {navigation.map((item, index) => {
            const isMenuOpen = activeMenu === item.label;
            const hasGroups = Boolean(item.groups?.length);

            return (
              <div
                key={item.label}
                className={`
                  ${
                    index !== navigation.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }
                `}
              >
                {/* =================================================
                    TOP LEVEL ITEM
                ================================================== */}

                {hasGroups ? (
                  <button
                    type="button"
                    aria-expanded={isMenuOpen}
                    onClick={() => toggleMenu(item.label)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      text-sm
                      font-semibold
                      text-[var(--text-primary)]
                      transition-all
                      duration-300
                      hover:text-[var(--brand-pink)]
                    "
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={18}
                      strokeWidth={1.8}
                      className={`
                        transition-transform
                        duration-300
                        ${
                          isMenuOpen
                            ? "rotate-180 text-[var(--brand-pink)]"
                            : ""
                        }
                      `}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-sm
                      font-semibold
                      text-[var(--text-primary)]
                      transition-all
                      duration-300
                      hover:text-[var(--brand-pink)]
                    "
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </Link>
                )}

                {/* =================================================
                    GROUP ACCORDION
                ================================================== */}

                {hasGroups && isMenuOpen && (
                  <div
                    className="
                      border-t
                      border-[var(--border)]
                      bg-[var(--background)]
                      px-3
                      py-3
                    "
                  >
                    {/* =================================================
                        VIEW ALL
                    ================================================== */}

                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        mb-2
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-xs
                        font-semibold
                        text-[var(--brand-pink)]
                        transition-all
                        duration-300
                        hover:bg-[var(--surface-pink)]
                      "
                    >
                      <span>
                        Explore All {item.label}
                      </span>

                      <ArrowRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </Link>

                    {/* =================================================
                        GROUPS
                    ================================================== */}

                    <div className="space-y-1">
                      {item.groups?.map((group) => {
                        const isGroupOpen =
                          activeGroup === group.title;

                        return (
                          <div
                            key={group.title}
                            className="
                              overflow-hidden
                              rounded-xl
                              border
                              border-[var(--border)]
                              bg-[var(--surface-pink)]
                            "
                          >
                            {/* =========================================
                                GROUP HEADER
                            ========================================== */}

                            <button
                              type="button"
                              aria-expanded={isGroupOpen}
                              onClick={() =>
                                toggleGroup(group.title)
                              }
                              className="
                                flex
                                w-full
                                items-center
                                justify-between
                                px-4
                                py-3.5
                                text-left
                              "
                            >
                              {/* GROUP TITLE */}

                              <span
                                className="
                                  min-w-0
                                  flex-1
                                  text-xs
                                  font-semibold
                                  text-[var(--text-primary)]
                                "
                              >
                                {group.title}
                              </span>

                              {/* CHEVRON */}

                              <ChevronDown
                                size={16}
                                strokeWidth={1.8}
                                className={`
                                  shrink-0
                                  text-[var(--text-secondary)]
                                  transition-transform
                                  duration-300
                                  ${
                                    isGroupOpen
                                      ? "rotate-180 text-[var(--brand-pink)]"
                                      : ""
                                  }
                                `}
                              />
                            </button>

                            {/* =========================================
                                SUB SERVICES
                            ========================================== */}

                            {isGroupOpen && (
                              <div
                                className="
                                  border-t
                                  border-[var(--border)]
                                  px-2
                                  pb-2
                                  pt-2
                                "
                              >
                                {/* GROUP PAGE */}

                                <Link
                                  href={group.href}
                                  onClick={closeMenu}
                                  className="
                                    mb-1
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    px-3
                                    py-2.5
                                    text-xs
                                    font-semibold
                                    text-[var(--brand-pink)]
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--background)]
                                  "
                                >
                                  <span>
                                    Explore {group.title}
                                  </span>

                                  <ArrowRight
                                    size={14}
                                    strokeWidth={1.8}
                                  />
                                </Link>

                                {/* SERVICES */}

                                <div className="space-y-0.5">
                                  {group.items.map((service) => (
                                    <Link
                                      key={service.title}
                                      href={service.href}
                                      onClick={closeMenu}
                                      className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-lg
                                        px-3
                                        py-2.5
                                        transition-all
                                        duration-300
                                        hover:bg-[var(--background)]
                                      "
                                    >
                                      {/* SERVICE TITLE */}

                                      <span
                                        className="
                                          min-w-0
                                          flex-1
                                          text-xs
                                          font-medium
                                          text-[var(--text-primary)]
                                          transition-colors
                                          duration-300
                                          group-hover:text-[var(--brand-pink)]
                                        "
                                      >
                                        {service.title}
                                      </span>

                                      {/* ARROW */}

                                      <ArrowRight
                                        size={14}
                                        strokeWidth={1.7}
                                        className="
                                          shrink-0
                                          text-[var(--text-secondary)]
                                          opacity-0
                                          transition-all
                                          duration-300
                                          group-hover:translate-x-0.5
                                          group-hover:text-[var(--brand-pink)]
                                          group-hover:opacity-100
                                        "
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            STANDALONE LINKS
        ====================================================== */}

        <div
          className="
            mt-3
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-pink)]
            shadow-[var(--shadow-sm)]
          "
        >
          {standaloneNavigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`
                group
                flex
                items-center
                justify-between
                px-5
                py-4
                text-sm
                font-semibold
                text-[var(--text-primary)]
                transition-all
                duration-300
                hover:text-[var(--brand-pink)]
                ${
                  index !== standaloneNavigation.length - 1
                    ? "border-b border-[var(--border)]"
                    : ""
                }
              `}
            >
              <span>{item.label}</span>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          ))}
        </div>

        {/* =====================================================
            MOBILE CTA
        ====================================================== */}

        <Link
          href="/contact"
          onClick={closeMenu}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[var(--brand-blue)]
            px-5
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-[var(--shadow-md)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[var(--shadow-lg)]
          "
        >
          <span>Let&apos;s Talk</span>

          <ArrowRight
            size={17}
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </div>
  );
}
