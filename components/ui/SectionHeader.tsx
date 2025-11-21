import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  actionText?: string;
  actionHref?: string;
};

export default function SectionHeader({ title, actionText, actionHref }: SectionHeaderProps) {
  return (
    <div className="border-b flex justify-between items-center">
    <h1 className="text-lg font-semibold">{title}</h1>
    {actionText && actionHref && (
      <Link href={actionHref} className="text-muted-foreground text-xs hover:text-blue-600">
        {actionText}
      </Link>
    )}
  </div>
  )
}