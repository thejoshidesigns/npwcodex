import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function AdminDashboardPage() {
  return (
    <PageShell
      description="Protected placeholder for future administration, moderation, resources, and member operations."
      eyebrow="Admin"
      title="Admin Dashboard"
    >
      <PlaceholderCard
        description="Admin authorization, audit logs, moderation queues, and operational tools will be designed before implementation."
        title="Admin placeholder"
      />
    </PageShell>
  );
}
