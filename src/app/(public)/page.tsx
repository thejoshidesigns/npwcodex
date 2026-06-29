import Link from "next/link";

import { PlaceholderCard } from "@/components/ui/placeholder-card";

const priorities = [
  {
    title: "Private encouragement",
    description:
      "Future story submission and prayer workflows will be designed around consent, confidentiality, and careful follow-up.",
  },
  {
    title: "Member community",
    description:
      "The protected experience will eventually include forums, prayer rooms, resources, and messaging.",
  },
  {
    title: "Clear boundaries",
    description:
      "NPW is Christian encouragement, not therapy, counseling, psychiatric treatment, or crisis intervention.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="mx-auto grid min-h-[680px] w-[min(1180px,calc(100%-2rem))] items-center gap-12 py-20 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-navy">
              Secure faith-centered community foundation
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-none text-forest md:text-7xl">
              Walk through transition with faith, direction, and purpose.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-stone">
              New Path Walker is being built as a long-term Christian
              encouragement platform for people navigating major life changes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-md bg-forest px-5 py-3 font-bold text-white"
                href="/submit-story"
              >
                Submit Story
              </Link>
              <Link
                className="rounded-md border border-forest/20 bg-white px-5 py-3 font-bold text-forest"
                href="/resources"
              >
                View Resources
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-forest/10 bg-white p-8 shadow-xl">
            <p className="text-sm font-black uppercase tracking-wide text-gold">
              Step 1
            </p>
            <h2 className="mt-3 font-serif text-3xl">Project foundation</h2>
            <p className="mt-4 leading-7 text-stone">
              This version intentionally contains placeholders only. Features
              will be added after architecture approval.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-5 py-16 md:grid-cols-3">
        {priorities.map((item) => (
          <PlaceholderCard key={item.title} {...item} />
        ))}
      </section>
    </>
  );
}
