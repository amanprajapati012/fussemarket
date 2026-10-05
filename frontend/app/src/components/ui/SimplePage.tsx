import PageHero from "./PageHero";
import CTA from "../Homepage/CTA";

export default function SimplePage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      {children && <section className="py-16"><div className="container-premium">{children}</div></section>}
      <CTA />
    </>
  );
}
