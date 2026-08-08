export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 text-sm">
      <span className="text-[var(--color-accent)]">{index}.</span>
      <span className="text-[var(--color-text)]">{title}</span>
      <span className="h-px flex-1 bg-[var(--color-border)]" />
    </h2>
  );
}
