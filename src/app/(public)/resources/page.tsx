import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function ResourcesPage() {
  return (
    <PageShell
      description="Placeholder for future articles, Scripture reflections, member-only downloads, and guided learning paths."
      eyebrow="Resources"
      title="Faith-centered resources for the path ahead."
    >
      <PlaceholderCard
        description="Resource publishing, categorization, and access controls will be designed in a later step."
        title="Resource library placeholder"
      />
    </PageShell>
  );
}
