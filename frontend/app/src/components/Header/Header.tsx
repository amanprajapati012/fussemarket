
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import DesktopHeader from "./DesktopHeader";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*
   * ---------------------------------------------------------
   * SCROLL EFFECT
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * MOBILE BODY SCROLL LOCK
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
   * ---------------------------------------------------------
   * ESCAPE KEY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * CLOSE MOBILE MENU WHEN DESKTOP OPENS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * TOGGLE MOBILE MENU
   * ---------------------------------------------------------
   */

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
  };

  /*
   * ---------------------------------------------------------
   * CLOSE MOBILE MENU
   * ---------------------------------------------------------
   */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          transition-all
          duration-300
          ${
            scrolled
              ? `
                border-b
                border-[var(--border)]
                bg-[var(--background)]/95
                shadow-[var(--shadow-sm)]
                backdrop-blur-xl
              `
              : `
                bg-[var(--background)]/90
                backdrop-blur-md
              `
          }
        `}
      >
        {/* ===================================================
            HEADER CONTAINER
        ==================================================== */}

        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1280px]
            items-center
            gap-6
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            aria-label="Fusse Market Home"
            onClick={closeMobileMenu}
            className="
              group
              relative
              z-[110]
              flex
              shrink-0
              items-center
            "
          >
            <Image
              src="/logo.png"
              alt="Fusse Market"
              width={150}
              height={48}
              priority
          className="
  h-auto
  w-[78px]
  object-contain
  transition-transform
  duration-300
  group-hover:scale-[1.02]
  sm:w-[86px]
  lg:w-[95px]
"></Image>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden min-w-0 flex-1 lg:block">
            <DesktopHeader
              onNavigate={closeMobileMenu}
            />
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

         <Link
  href="/contact"
  className="
    group
    hidden
    shrink-0
    items-center
    gap-2
    rounded-full
    bg-[var(--brand-pink)]
    px-5
    py-2.5
    text-[13px]
    font-semibold
    text-white
    shadow-[var(--shadow-sm)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:shadow-[var(--shadow-md)]
    lg:flex
  "
>
  <span>Let&apos;s Talk</span>

  <ArrowRight
    size={15}
    strokeWidth={1.8}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={toggleMobileMenu}
            className="
              relative
              z-[110]
              ml-auto
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface-pink)]
              text-[var(--text-primary)]
              transition-all
              duration-300
              hover:border-[var(--brand-pink)]
              hover:bg-[var(--surface-pink)]
              hover:text-[var(--brand-pink)]
              lg:hidden
            "
          >
            <span
              className="
                absolute
                inset-0
                rounded-full
                opacity-0
                ring-2
                ring-[var(--brand-pink)]
                transition-opacity
                duration-300
                group-focus-visible:opacity-100
              "
            />

            {mobileOpen ? (
              <X
                size={21}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <MobileMenu
        isOpen={mobileOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}