import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import CreateTasksBtn from "../components/CreateTasksBtn";
import CreateTasksForm from "./CreateTasksForm";

export default function TaskList() {
  let content = false;
  const handleCreate = () => {
    console.log("Create tasks btn");
    content = true;
  };
  console.log(content);

  return (
    <>
      <CreateTasksBtn onClickCreate={handleCreate} />
      {content ? <CreateTasksForm /> : ""}
      <Table className="w-3/4 m-auto mt-10 bg-cyan-200">
        <TableCaption>A list of your tasks to do.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Read Book</TableCell>
            <TableCell>To read book at night before sleeping</TableCell>
            <TableCell className="text-right">
              <Link to="/edit/1">
                <Button>Edit</Button>
              </Link>
            </TableCell>
            <TableCell className="text-right">
              <Button>Done</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
