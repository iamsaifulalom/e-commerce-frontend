import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


/* ============================================================================
 * Section Header Component
 * ==========================================================================*/

type SectionHeaderProps = {
  title: string;
  actionText?: string;
  actionHref?: string;
};

function SectionHeader({ title, actionText, actionHref }: SectionHeaderProps) {
  return (
    <div className="flex pb-2 items-center justify-between border-b">
      <h1 className="text-lg font-semibold">{title}</h1>

      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="text-xs text-muted-foreground hover:text-blue-600"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
}

/* ============================================================================
 * List Item Component
 * ==========================================================================*/

interface ListItemCardProps {
  imageUrl: string;
  imageFallback: string;
  title: string;
  description?: string;
  value: string;
  showBadge?: boolean;
}

function ListItemCard({
  imageUrl,
  imageFallback,
  title,
  description,
  value,
  showBadge = false,
}: ListItemCardProps) {
  return (
    <div className="flex items-center justify-between space-x-4 py-2">
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={imageUrl} alt={title} />
          <AvatarFallback>{imageFallback}</AvatarFallback>
        </Avatar>

        <div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-medium">{title}</p>
            {showBadge && (
              <BadgeCheck className="size-3.5 text-green-200" fill="green" />
            )}
          </div>

          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}

/* ============================================================================
 * List Section Wrapper Component
 * ==========================================================================*/

interface ListSectionProps {
  title: string;
  actionText?: string;
  actionHref?: string;
  items: ListItemCardProps[];
}

export default function ListSection({
  title,
  actionText,
  actionHref,
  items,
}: ListSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <SectionHeader
        title={title}
        actionText={actionText}
        actionHref={actionHref}
      /> */}

        {items.map((item) => (
          <ListItemCard key={item.title} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
