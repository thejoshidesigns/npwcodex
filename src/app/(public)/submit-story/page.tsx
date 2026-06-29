import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function SubmitStoryPage() {
  return (
    <PageShell
      description="Placeholder for a future private story intake workflow. No form is active in Step 1."
      eyebrow="Submit Story"
      title="Private story intake will be designed with consent first."
    >
      <PlaceholderCard
        description="The future workflow will include anonymity, consent, safety language, spam protection, validation, and secure email/database handling."
        title="Story submission placeholder"
      />
    </PageShell>
  );
}
