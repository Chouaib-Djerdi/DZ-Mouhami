import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { profile } from "../utils";
const requests = [profile, profile, profile, profile];

const AdminDashboard = () => {
  return (
    <div className="p-10 space-y-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Admin Tableau de bord</h1>
        <Button variant="outline">Log Out</Button>
      </div>
      <h3 className="text-lg font-semibold">Liste des demandes :</h3>

      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Request Name</TableHead>
            <TableHead className="w-[200px]">Request Submission Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link
                  className="font-medium text-primary hover:text-normalblue"
                  to={`/admin/request/${request.id}`}
                >
                  Request 1
                </Link>
              </TableCell>
              <TableCell>January 5, 2024, 10:30 AM</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminDashboard;
