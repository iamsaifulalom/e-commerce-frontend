import { TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ListFilterPlus, PlusIcon, ImportIcon } from "lucide-react";

export default function CustomerTableHeader() {

  return (
    <TableHeader>
      {/* Search & Action Buttons */}
      <TableRow>
        <TableHead colSpan={7} className="px-1 py-2">
          <div className="flex w-full gap-6 justify-between">
            <div className="flex gap-2">
              <Input
                className="w-full min-w-52"
                placeholder="Search customer..."
                type="search"
              />
              <Button variant="outline">
                <ListFilterPlus />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <ImportIcon /> Import CSV
              </Button>
              <Button variant="outline">
                <ImportIcon className="rotate-180" /> Export CSV
              </Button>
              <Button>
                <PlusIcon /> Add customer
              </Button>
            </div>
          </div>
        </TableHead>
      </TableRow>

      {/* Table Column Headers */}
      <TableRow>
        <TableHead>
          <Checkbox />
        </TableHead>
        <TableHead></TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Joined</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Spend</TableHead>
        <TableHead className="text-end">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}
