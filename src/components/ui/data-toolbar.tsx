"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "./select";
import { Plus, SearchIcon } from "lucide-react";
import { Input } from "./input";

type FilterConfig = {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
};

type Props = {
    search: string;
    onSearchChange: (value: string) => void;

    filter?: FilterConfig;
    addLabel?: string;
    onAdd?: () => void;
};

export const DataToolbar: FC<Props> = ({
    search,
    onSearchChange,
    filter,
    addLabel,
    onAdd,
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-3">
            {/* LEFT */}
            <div className="flex flex-col md:flex-row items-center gap-2 flex-1">

                <div className="flex items-center">
                    <Input
                        type="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="max-w-xs w-full rounded-r-none border-0"
                    />
                    <Button variant="secondary" size="icon" className="rounded-l-none">
                        <SearchIcon/>
                    </Button>
                </div>

                {filter && (
                    <div className="flex flex-1 w-full items-center gap-2">
                        <Select value={filter.value} onValueChange={filter.onChange}>
                            <SelectTrigger className="w-40">{filter.label}</SelectTrigger>
                            <SelectContent>
                                {filter.options.map((opt) => (
                                    <SelectItem key={opt} value={opt}>
                                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            {/* RIGHT */}
            {onAdd && (
                <Button onClick={onAdd} className=" w-full md:w-auto">
                    <Plus className="mr-2 size-4" />
                    {addLabel || "Add"}
                </Button>
            )}
        </div>
    );
};
