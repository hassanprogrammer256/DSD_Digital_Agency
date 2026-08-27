type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, highlight, description, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {description && <p className="mt-3 text-text-secondary">{description}</p>}
    </div>
  );
}
