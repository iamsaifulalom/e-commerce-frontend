import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { users } from "@/components/admin/customers/data/customers.data";
import CustomerTableHeader from "./CustomerTableHeader";
import CustomerRow from "./CustomerRow";

export default function CustomersTable() {
  return (
    <Card>
      <CardContent>
        <Table>
          <CustomerTableHeader />
          <TableBody>
            {users.map((user) => (
              <CustomerRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
