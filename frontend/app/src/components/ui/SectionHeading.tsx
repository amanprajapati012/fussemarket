interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>

      <h2
        className={`mt-4 text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-[#172033]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-white/70" : "text-[#596477]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
