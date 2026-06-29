import type { NavigationItem } from "@/types/navigation";

export const publicNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Resources", href: "/resources" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Submit Story", href: "/submit-story" },
  { label: "Contact", href: "/contact" },
];

export const memberNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", protected: true },
  { label: "Forum", href: "/forum", protected: true },
  { label: "Prayer Room", href: "/prayer-room", protected: true },
  { label: "Messages", href: "/messages", protected: true },
  { label: "Admin", href: "/admin", protected: true, adminOnly: true },
];
