import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function TestimonialsPage() {
  return (
    <PageShell
      description="Placeholder for moderated personal stories shared only with clear permission."
      eyebrow="Testimonials"
      title="Stories of hope, shared carefully."
    >
      <PlaceholderCard
        description="Public testimony workflows will require moderation, consent, privacy review, and publication controls."
        title="Moderated story placeholder"
      />
    </PageShell>
  );
}
