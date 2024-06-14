import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CreateTasksForm from "./CreateTasksForm";

export default function CreateTasksBtn({ onClickCreate }) {
  return (
    <div className=" flex justify-end mt-4 me-4">
      <Button
        onClick={onClickCreate}
        className=" bg-cyan-200 hover:bg-cyan-300 text-black"
      >
        Create Tasks
      </Button>
    </div>
  );
}
