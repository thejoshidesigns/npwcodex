import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-6 py-10 text-sm text-stone md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-bold text-forest">{siteConfig.name}</p>
          <p>
            Christian encouragement and community for people navigating major
            life transitions.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-bold text-forest-soft">
          <Link href="/mission">Mission</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
