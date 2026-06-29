import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function LoginPage() {
  return (
    <PageShell
      description="Placeholder for future Auth.js credentials login."
      eyebrow="Login"
      title="Member login foundation placeholder."
    >
      <PlaceholderCard
        description="Authentication is intentionally not implemented in Step 1."
        title="Login placeholder"
      />
    </PageShell>
  );
}
