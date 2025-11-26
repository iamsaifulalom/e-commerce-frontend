import { TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { EyeIcon, EllipsisIcon } from "lucide-react";

type Customer = {
  id: string | number;
  image: string;
  name: string;
  joined: string;
  spend: string | number;
};

export default function CustomerRow({ user }: { user: Customer }) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>
        <Image
          src={user.image}
          alt={user.name}
          width={100}
          height={100}
          className="size-10 rounded-full"
        />
      </TableCell>
      <TableCell>
        <h1>{user.name}</h1>
        <p className="text-xs text-muted-foreground">user@user.com</p>
      </TableCell>
      <TableCell>{user.joined}</TableCell>
      <TableCell>USER</TableCell>
      <TableCell>{user.spend}</TableCell>
      <TableCell className="flex gap-3 justify-end">
        <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
        <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
      </TableCell>
    </TableRow>
  );
}
