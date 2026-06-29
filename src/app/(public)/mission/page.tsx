import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function MissionPage() {
  return (
    <PageShell
      description="NPW helps people experiencing major life transitions through Christian encouragement, Scripture, personal stories, and community."
      eyebrow="Mission"
      title="Encouragement and community centered on Christ."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <PlaceholderCard
          description="NPW will provide encouragement, Scripture, community, and member-only resources."
          title="What NPW is"
        />
        <PlaceholderCard
          description="NPW is not therapy, counseling, psychiatric treatment, crisis intervention, medical advice, or legal advice."
          title="What NPW is not"
        />
        <PlaceholderCard
          description="Security, privacy, consent, and moderation will guide future feature decisions."
          title="Operating principle"
        />
      </div>
    </PageShell>
  );
}
