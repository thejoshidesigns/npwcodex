import { PageShell } from "@/components/ui/page-shell";
import { PlaceholderCard } from "@/components/ui/placeholder-card";

export default function ContactPage() {
  return (
    <PageShell
      description="Placeholder for general contact, partnership, speaking, and ministry support workflows."
      eyebrow="Contact"
      title="Contact workflows will be added after foundation approval."
    >
      <PlaceholderCard
        description="Nodemailer and Hostinger SMTP are installed for the future email layer, but no forms or API routes are active yet."
        title="Contact placeholder"
      />
    </PageShell>
  );
}
