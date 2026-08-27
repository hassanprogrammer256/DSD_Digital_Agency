import type { ReactNode } from "react";

type Props = {
  image: string;
  imagePosition?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  children?: ReactNode;
};

export function PageHeroBanner({
  image,
  imagePosition = "center",
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: Props) {
  const isLeft = align === "left";

  return (
    <section
      className="relative overflow-hidden bg-navy bg-cover bg-center px-4 py-20 md:px-6 md:py-28"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(10,27,51,0.88) 0%, rgba(10,27,51,0.55) 60%, rgba(10,27,51,0.35) 100%)",
        }}
      />
      <div className={`relative mx-auto max-w-3xl ${isLeft ? "text-center lg:text-left" : "text-center"}`}>
        {eyebrow && (
          <div className="text-sm font-semibold uppercase tracking-wide text-white/60">{eyebrow}</div>
        )}
        <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h1>
        {description && (
          <p className={`mt-4 text-white/75 ${isLeft ? "mx-auto max-w-lg lg:mx-0" : "mx-auto max-w-lg"}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
