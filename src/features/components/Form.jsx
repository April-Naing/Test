import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function Form({ text, onAdd }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const changeHandler = (event, identifier) => {
    if (identifier === "name") {
      setName(event.target.value);
    } else if (identifier === "description") {
      setDescription(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const input = {
      name: name,
      description: description,
    };

    onAdd(input);
  };

  return (
    <Card className="w-[350px] m-auto bg-cyan-200">
      <CardHeader>
        <CardTitle>{text} Task</CardTitle>
        <CardDescription>{text} your new task in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your task"
                onChange={(event) => changeHandler(event, "name")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>
              <Input
                id="name"
                placeholder="Description of your task"
                onChange={(event) => changeHandler(event, "description")}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit" onClick={submitHandler}>
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}
