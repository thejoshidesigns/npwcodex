import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function MemberDashboardPage() {
  return (
    <PageShell
      description="Protected placeholder for future member overview, resources, prayer updates, and activity."
      eyebrow="Protected"
      title="Member Dashboard"
    >
      <PlaceholderCard
        description="Route placeholder only. Access control will be added when authentication is implemented."
        title="Dashboard placeholder"
      />
    </PageShell>
  );
}
