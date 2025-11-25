import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipsisIcon, EyeIcon, ImportIcon, ListFilterPlus, PlusIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { users } from "@/components/features/customers/data/customers.data";

export default function Customers() {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell colSpan={7}>
                                <div className="flex w-full gap-6 justify-between">
                                    <div className="flex gap-2">
                                        <Input className="w-full min-w-52" placeholder="Search customer..." type="search" />
                                        <Button variant="outline">
                                        <ListFilterPlus/>
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
                                            <PlusIcon /> Add customer
                                        </Button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableHead >
                                <Checkbox />
                            </TableHead>
                            <TableHead >
                            </TableHead>
                            <TableHead >
                                Name
                            </TableHead>
                            <TableHead >
                                Joined
                            </TableHead>
                            <TableHead >
                                Role
                            </TableHead>
                            <TableHead>
                                Spend
                            </TableHead>
                            <TableHead className="text-end">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell> <Checkbox /></TableCell>
                                <TableCell>
                                    <Image
                                        src={user.image}
                                        alt="Product name"
                                        width={100}
                                        height={100}
                                        className="size-10 rounded-full"
                                    />
                                </TableCell>
                                <TableCell>
                                    <h1>{user.name}</h1>
                                    <p className="text-xs text-muted-foreground">
                                        user@user.com
                                    </p>
                                </TableCell>
                                <TableCell> {user.joined}</TableCell>
                                <TableCell> USER</TableCell>
                                <TableCell> {user.spend}</TableCell>

                                <TableCell className="flex gap-3 justify-end">
                                    <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
                                    <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
