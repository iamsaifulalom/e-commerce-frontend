import { ComboboxDemo } from "@/app/admin/category/components/ComboBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImportIcon, ListFilterPlus, PlusIcon } from "lucide-react";

// Toolbar Component
export default function ProductsToolbar() {
    return (
        <div className="flex w-full gap-6 justify-between">
            <div className="flex gap-2">
                <Input className="w-full min-w-52" placeholder="Search product..." type="search" />
                <ComboboxDemo/>
                <Button variant="outline">
                    <ListFilterPlus />
                </Button>
            </div>
            <div className="flex gap-2">
                <Button variant="outline">
                    <ImportIcon /> Import csv
                </Button>
                <Button variant="outline">
                    <ImportIcon className="rotate-180" /> Export csv
                </Button>
                <Button>
                    <PlusIcon /> Add product
                </Button>
            </div>
        </div>
    );
}