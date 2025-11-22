import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react"; // Using lucide-react for the optional 'badge'

export interface ListItemCardProps {
  /** The URL for the item's image or customer's avatar. */
  imageUrl: string;
  /** The fallback text for the avatar (e.g., initials). */
  imageFallback: string;
  /** The main title (e.g., Customer Name or Product Name). */
  title: string;
  /** The secondary description (e.g., Purchase count or Category). */
  description?: string;
  /** The price or total value (e.g., $4.19K or $110.96). */
  value: string;
  /** Optional: show a small indicator/badge next to the title. */
  showBadge?: boolean;
}

export function ListItemCard({
  imageUrl,
  imageFallback,
  title,
  description,
  value,
  showBadge = false,
}: ListItemCardProps) {
  return (
    <div className="flex items-center justify-between space-x-4 py-2">
      {/* 1. Image/Avatar Section */}
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={imageUrl} alt={title} />
          <AvatarFallback>{imageFallback}</AvatarFallback>
        </Avatar>

        {/* 2. Title & Description Section */}
        <div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-medium leading-none">{title}</p>
            {showBadge && (
              <BadgeCheck className="size-3.5 text-green-200" fill="green" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* 3. Value/Price Section */}
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}