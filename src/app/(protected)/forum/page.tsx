import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function MemberForumPage() {
  return (
    <PageShell
      description="Protected placeholder for future private discussion groups."
      eyebrow="Protected"
      title="Member Forum"
    >
      <PlaceholderCard
        description="Forum design will require moderation, reporting, permissions, and abuse prevention."
        title="Forum placeholder"
      />
    </PageShell>
  );
}
