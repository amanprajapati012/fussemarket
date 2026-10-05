"use client";

import { Sparkles } from "lucide-react";

type Technology = {
  name: string;
  logo: string;
};

const technologies: Technology[] = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Android",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "iOS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "REST API",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Cloudinary",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  },
 {
  name: "JWT",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg",
},

  {
    name: "Responsive Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
];

export default function Technologies() {
  const firstRow = technologies.slice(0, 14);
  const secondRow = technologies.slice(14);

  const firstMarquee = [...firstRow, ...firstRow];
  const secondMarquee = [...secondRow, ...secondRow];

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24"
    >
      {/* Soft Ambient Background */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[360px] w-[360px] rounded-full bg-[var(--brand-pink)] opacity-[0.045] blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-160px] h-[380px] w-[380px] rounded-full bg-[var(--brand-blue)] opacity-[0.05] blur-[110px]" />

      {/* Heading */}
      <div className="container-premium relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Label */}
          <div className="section-eyebrow justify-center">
            Technologies
          </div>

          {/* Main Heading */}
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--text-primary)] sm:text-4xl md:text-[2.8rem]">
            Technologies We Work With
          </h2>
        </div>
      </div>

      {/* Technology Marquees */}
      <div className="relative z-10 mt-12 space-y-4 md:mt-14 md:space-y-5">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[var(--background)] to-transparent md:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[var(--background)] to-transparent md:w-32" />

        {/* Row 1 */}
        <div className="overflow-hidden">
          <div
            className="
              tech-marquee
              flex
              w-max
              gap-4
              px-3
              hover:[animation-play-state:paused]
              md:gap-5
            "
          >
            {firstMarquee.map((technology, index) => (
              <TechnologyItem
                key={`row-one-${technology.name}-${index}`}
                technology={technology}
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div
            className="
              tech-marquee-reverse
              flex
              w-max
              gap-4
              px-3
              hover:[animation-play-state:paused]
              md:gap-5
            "
          >
            {secondMarquee.map((technology, index) => (
              <TechnologyItem
                key={`row-two-${technology.name}-${index}`}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container-premium relative z-10 mt-10">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-2.5 text-center">
          <span
            className="
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[var(--surface-pink)]
              text-[var(--brand-pink)]
            "
          >
            <Sparkles size={12} />
          </span>

          <p className="text-xs leading-5 text-[var(--text-muted)] md:text-sm">
            One technology stack. Multiple possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}

function TechnologyItem({
  technology,
}: {
  technology: Technology;
}) {
  return (
    <div
      className="
        group
        relative
        flex
        h-[150px]
        w-[210px]
        shrink-0
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        px-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[var(--brand-pink)]
        hover:bg-[var(--surface-soft)]
        hover:shadow-[var(--shadow-md)]
        sm:w-[225px]
        md:h-[165px]
        md:w-[245px]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[var(--surface-pink)]
          via-transparent
          to-[var(--surface-blue)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Logo */}
      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[var(--surface-soft)]
          p-3.5
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:bg-[var(--surface)]
          md:h-[72px]
          md:w-[72px]
          md:p-4
        "
      >
        <img
          src={technology.logo}
          alt={technology.name}
          loading="lazy"
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Technology Name */}
      <h3
        className="
          relative
          mt-5
          text-center
          text-sm
          font-semibold
          tracking-[-0.015em]
          text-[var(--text-primary)]
          transition-colors
          duration-300
          group-hover:text-[var(--brand-blue-dark)]
          md:text-[15px]
        "
      >
        {technology.name}
      </h3>

      {/* Small Accent */}
      <span
        className="
          absolute
          right-4
          top-4
          h-1.5
          w-1.5
          rounded-full
          bg-[var(--brand-pink)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  );
}