import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function RegisterPage() {
  return (
    <PageShell
      description="Placeholder for future member registration."
      eyebrow="Register"
      title="Member registration will be designed later."
    >
      <PlaceholderCard
        description="Registration, verification, password handling, and account policies will be implemented in a dedicated auth step."
        title="Register placeholder"
      />
    </PageShell>
  );
}
