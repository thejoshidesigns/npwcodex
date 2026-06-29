import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function MessagesPage() {
  return (
    <PageShell
      description="Protected placeholder for future member and ministry communication."
      eyebrow="Protected"
      title="Messages"
    >
      <PlaceholderCard
        description="Messaging will be planned around privacy, moderation, retention, and member safety."
        title="Messages placeholder"
      />
    </PageShell>
  );
}
