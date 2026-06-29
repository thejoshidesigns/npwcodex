import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-forest to-navy text-white">
        <div className="mx-auto w-[min(1180px,calc(100%-2rem))] py-20">
          {eyebrow ? (
            <p className="mb-4 text-sm font-black uppercase tracking-wide text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,calc(100%-2rem))] py-16">
        {children}
      </section>
    </>
  );
}
