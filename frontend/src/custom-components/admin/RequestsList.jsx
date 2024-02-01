import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const RequestsList = ({ list }) => {
  return (
    <Table className="w-full border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Request Name</TableHead>
          <TableHead className="w-[200px]">Request Submission Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <Link
                className="font-medium text-primary hover:text-normalblue"
                to={`/admin/request/1`}
              >
                Avocat ID : 1
              </Link>
            </TableCell>
            <TableCell>January 27, 2024</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RequestsList;
