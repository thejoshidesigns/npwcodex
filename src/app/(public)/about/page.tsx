import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function AboutPage() {
  return (
    <PageShell
      description="A future founder and ministry story page explaining why NPW exists and who it serves."
      eyebrow="About"
      title="A Christian encouragement platform for seasons of change."
    >
      <PlaceholderCard
        description="Founder story, ministry values, and service commitments will be added in a later content step."
        title="About placeholder"
      />
    </PageShell>
  );
}
