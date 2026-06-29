import Image from "next/image";
import Link from "next/link";

import { publicNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur">
      <nav className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-6">
        <Link
          className="flex items-center gap-3 font-black tracking-wide"
          href="/"
        >
          <Image
            alt=""
            className="size-12 rounded-full"
            height={96}
            priority
            src="/npw-logo-emblem.png"
            width={96}
          />
          <span className="leading-tight">
            {siteConfig.name}
            <small className="block text-xs font-bold text-stone">
              {siteConfig.tagline}
            </small>
          </span>
        </Link>
        <div className="hidden items-center gap-5 text-sm font-bold text-forest-soft lg:flex">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-md bg-forest px-4 py-2.5 text-white"
            href="/login"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
