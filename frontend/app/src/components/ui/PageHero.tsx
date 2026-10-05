export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="hero-background dot-grid relative overflow-hidden py-20 sm:py-28">
      <div className="container-premium relative z-10 mx-auto max-w-3xl text-center">
        <span className="section-eyebrow mx-auto">{eyebrow}</span>
        <h1 className="mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-tight tracking-tight text-[var(--text-primary)]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
