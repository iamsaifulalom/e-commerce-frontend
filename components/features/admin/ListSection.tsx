import SectionHeader from "@/components/ui/SectionHeader";
import { ListItemCard,ListItemCardProps } from "./ListItemCard";


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
    <div>
      <SectionHeader
        title={title}
        actionText={actionText}
        actionHref={actionHref}
      />

      {items.map((item, index) => (
        <ListItemCard
          key={index}
          {...item}
        />
      ))}
    </div>
  );
}
