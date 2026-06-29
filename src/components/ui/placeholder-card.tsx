type PlaceholderCardProps = {
  title: string;
  description: string;
};

export function PlaceholderCard({ title, description }: PlaceholderCardProps) {
  return (
    <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
      <h2 className="font-serif text-2xl text-forest">{title}</h2>
      <p className="mt-3 leading-7 text-stone">{description}</p>
    </article>
  );
}
