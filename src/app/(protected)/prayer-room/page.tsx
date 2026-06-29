import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function PrayerRoomPage() {
  return (
    <PageShell
      description="Protected placeholder for future private prayer requests and prayer groups."
      eyebrow="Protected"
      title="Prayer Room"
    >
      <PlaceholderCard
        description="Prayer features will require privacy, consent, visibility controls, and careful moderation."
        title="Prayer room placeholder"
      />
    </PageShell>
  );
}
